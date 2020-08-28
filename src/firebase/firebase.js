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

database.ref().set({
    name: 'Matheus Silva'
});