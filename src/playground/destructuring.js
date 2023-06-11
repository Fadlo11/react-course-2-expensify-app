// const person ={
//     name:'Fadel',
//     age: 43,
//     location: {
//         city: 'Beirut',
//         temp: 35
//     }
// };

// const {name: firstName ='Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// console.log(`It is ${temperature} in ${city}`);

// const book ={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// const address = ['1299 $ Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// // const address = [];

// const [, city, state ='New York'] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75'];

const [itemName,,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);