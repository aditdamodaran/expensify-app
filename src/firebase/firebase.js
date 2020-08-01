import * as firebase from 'firebase'

const config= {
    apiKey: "AIzaSyBaqRxv-85pH2hC_CvlcQijfEjOJ19LgWo",
    authDomain: "expensify-8bf07.firebaseapp.com",
    databaseURL: "https://expensify-8bf07.firebaseio.com",
    projectId: "expensify-8bf07",
    storageBucket: "expensify-8bf07.appspot.com",
    messagingSenderId: "430631321064",
    appId: "1:430631321064:web:307a7822e8ed17f792f85d"
};

firebase.initializeApp(config);

const database = firebase.database()

database.ref().set({
  name: 'Adit Damodaran',
  age: 21,
  isSingle: false,
  location: {
    city: 'Chicago',
    country: 'U.S'
  }
})

database.ref('age').set(20)