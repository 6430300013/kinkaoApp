import app from './connect'
import {getFirestore,collection,doc,setDoc} from 'firebase/firestore'

const db = getFirestore(app)
const usersColl = collection(db,"users")

export const addUser = (user,success,unsuccess) => {
  console.log(`addUser in UserModel user id : ${user.uid}
  displayName : ${user.displayName}`)
  //form docเพื่อเอาไปใช้ต่อ
  setDoc(doc(usersColl,user.uid),{
    studentID:"9999999",
    status:false
  })
  .then(()=>{
    success(user)
  })
  .catch((error)=>{
    console.error(`addUser in users collection error: ${error}`)
    console.error(msg)
    unsuccess(msg)
  })
}