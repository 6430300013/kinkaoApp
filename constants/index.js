// export const categories = [
//     {
//         id: 1,
//         name: 'Pizza',
//         image: require('../images/pizzaIcon.png'),
//     },
//     {
//         id: 2,
//         name: 'Burger',
//         image: require('../images/pizzaIcon.png'),
//     },
//     {
//         id: 3,
//         name: 'Italian',
//         image: require('..images/pizzaIcon.png'),
//     },
//     {
//         id: 4,
//         name: 'Chinese',
//         image: require('../images/pizzaIcon.png'),
//     },
//     {
//         id: 5,
//         name: 'Noodles',
//         image: require('../images/pizzaIcon.png'),
//     },
//     {
//         id: 6,
//         name: 'Sweets',
//         image: require('../images/pizzaIcon.png'),
//     },

// ]


export const featured = {
    id: 1,
    title: 'Fast food',
    description: 'Must try fried chicken!',
    restaurants: [
        {
            id: 1,
            name: 'KFC',
            image: require('../image/kfc.png'),
            description: 'Hot and spicy',
            // ละติจูด
            lng: -85.5324269,
            // ลองจิจูด 
            lat: 38.2145602,
            address: '404 street',
            dishes: [
                {
                   id: 1,
                   name: 'Chicken1',
                   description: 'Hot and spicy',
                   price: 10,
                   image:  require('../image/chicken1.png')
                },
                {
                   id: 2,
                   name: 'Chicken1',
                   description: 'Hot and spicy',
                   price: 10,
                   image:  require('../image/chicken1.png')
                },
                {
                   id: 3,
                   name: 'Chicken1',
                   description: 'Hot and spicy',
                   price: 10,
                   image:  require('../image/chicken1.png')
                },
            ]
    
        },
        {
            id: 2,
            name: 'Mew WinkSab',
            image: require('../image/chicken1.png'),
            description: 'Hot and spicy',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '404 street',
            dishes: [
                {
                   id: 1,
                   name: 'ChickChick',
                   description: 'cheezy',
                   price: 10,
                   image:  require('../image/chickenB.png')
                },
                {
                   id: 2,
                   name: 'ChickChick',
                   description: 'cheezy',
                   price: 10,
                   image:  require('../image/chickenB.png')
                },
                {
                   id: 3,
                   name: 'ChickChick',
                   description: 'cheezy',
                   price: 10,
                   image:  require('../image/chickenB.png')
                },
            ]
    
        },
    ],
    

}
