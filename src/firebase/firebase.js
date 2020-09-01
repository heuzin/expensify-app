import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

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