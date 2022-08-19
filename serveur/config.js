var firebase = require('firebase/app');
const initializeApp = require('firebase/app');
const firestore = require('@google-cloud/firestore');

const firebaseConfig = {
	apiKey: 'AIzaSyDujjUHDuI6jvMGBfolBs5Ar9cjDUiTI8I',
	authDomain: 'fir-withnode-13b39.firebaseapp.com',
	projectId: 'fir-withnode-13b39',
	storageBucket: 'fir-withnode-13b39.appspot.com',
	messagingSenderId: '547841978552',
	appId: '1:547841978552:web:8045e9bcec818ffa0f844d',
	measurementId: 'G-D4K2S8T388',
};

firebase.initializeApp(firebaseConfig);
//var reference =  firebase.database.ref()
//let database = firebase.database.reference()
var db = firebase.firestore;
//database.ref("customPath").set("hello  world")
//const User = db.collection("Users");

module.exports = db;
