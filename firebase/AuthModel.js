import app from './connect'
import {
  getAuth,createUserWithEmailAndPassword,
  signOut,signInWithEmailAndPassword,
  updateProfile,updatePassword,sendPasswordResetEmail
} from 'firebase/auth'

import {addUser} from 'firebase/UserModel'
//authen
const auth = getAuth(app)

export const signUpEmailPass = (profile,success,unsuccess) => {
  console.log(`username: ${profile.username}`)
  createUserWithEmailAndPassword(auth,profile.username,profile.password)
  .then((userCredential)=>{
    const user = userCredential.user //userไม่ได้ตั้งเองเป็นของโปรแกรมเขา
    console.log(`userCredential: ${user}`)
    //update profile and user in collection
    updateUserProfile(profile)
    addUser(user,success,unsuccess)
  })
  .catch((error)=>{
    console.error(`signUpEmailPass in AuthModel error: ${error}`)
    console.error(msg)
    unsuccess(msg)
  })
}

export const updateUserProfile = (profile) => {
  const fullname = profile.firstname + " " + profile.lastname
  console.log(`fullname: ${fullname}`)
  updateProfile(auth.currentUser,{
    displayName:fullname,
    photoURL:"https://ku.com/saiphoto",
    phoneNumber:"515-3145"
  })
  .then(()=>{
    console.log(`updateUserProfile successfully`)
  })
  .catch((error)=>{
    console.error(`updateUserProfile in AuthModel error: ${error}`)
    console.error(msg)
    unsuccess(msg)
  })
}

export const signInEmailPass = (username,password,success,unsuccess) => {
  console.log(`signInEmailPass username: ${username}`)
  signInWithEmailAndPassword(auth,username,password)
  .then((userCredential)=>{
    const user = userCredential.user
    console.log(`user after logged in : ${user}`)
    success(user)
  })
  .catch((error)=>{
    console.error(`signInEmailPass error: ${error}`)
    console.error(msg)
    unsuccess(msg)
  })
}

export const logout = (success,unsuccess) => {
  signOut(auth)
  .then(()=>{
    console.log(`Logged OUt`)
    success()
  })
  .catch((error)=>{
    console.error(`logout error: ${error}`)
    console.error(msg)
    unsuccess(msg)
  })
}

export const getCurrentSigneInUser = () => {
  //
  return auth.currentUser
}

export const setUserPassword = (email,oldPass,newPass,success,unsuccess) => [
  signInWithEmailAndPassword(auth,email,oldPass)
  .then((userCredential)=>{
    console.log('hello')
    const user = userCredential.user
    updatePassword(user,newPass)
    .then(()=>{
      success()
    })
    .catch((error)=>{
      const msg = `Change password error: ${error}`
      console.error(msg)
      unsuccess(msg)
    })
  })
  .catch((error)=>{
    console.error(`old passwprd error: ${error}`)
    console.error(msg)
    unsuccess(msg)
  })
]

export const resetPassword = (email,success,unsuccess) => {
  sendPasswordResetEmail(auth,email)
  .then(()=>{
    success()
  })
  .catch((error)=>{
      const msg = `reset password error: ${error}`
      console.error(msg)
      unsuccess(msg)
    })
}
