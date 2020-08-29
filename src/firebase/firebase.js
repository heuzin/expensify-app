import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA7V6Q16wYVhZBjONaFz5WWvwbems60WlU",
    authDomain: "expensify-ccf25.firebaseapp.com",
    databaseURL: "https://expensify-ccf25.firebaseio.com",
    projectId: "expensify-ccf25",
    storageBucket: "expensify-ccf25.appspot.com",
    messagingSenderId: "1008553199702",
    appId: "1:1008553199702:web:6ff1d47cb0752ffec5d3f7",
    measurementId: "G-Q8N5NN2BWF"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { firebase, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses)
//     })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses)
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 999932222
// })

// database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 59000,
//     createdAt: 9454374232
// })

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 9456354345324
// })

// to store array
// database.ref('notes').push({
//     title: 'To do',
//     body: 'Go to the gym'
// })

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} lives in ${val.location.city} at ${val.location.country}`);
// })

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val)
//     })
//     .catch((error) => {
//         console.log('Error fetching data', error)
//     })

// database.ref().set({
//     name: 'Matheus Silva',
//     age: 27,
//     stressLevel: 6,
//     isSingle: false,
//     location: {
//         city: 'Connectcut',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log("error", error)
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//     console.log('data was removed');
//     }).catch((error) => {
//         console.log('did not remove data', (error))
//     })

// database.ref().update({
//     name: 'Mike',
//     age: 27,
//     job: 'software developer',
//     'location/city': 'Boston'
// })