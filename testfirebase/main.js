

// var FirebaseClient = require('firebase-client');
// var firebase = new FirebaseClient({
//   url: "https://testdb-4ffc4.firebaseio.com/",
//   auth: "AIzaSyDsN02wuGzONiq4nVFJq6poEkSOgMugZ8U"
// });

// firebase
// .set('example', { value: true })
// .then(function(body){
//   console.log('Body: ' + body); // returns { value: true } 
// })
// .fail(function(err){
//   console.log('Error: ' + err);
// });



// firebase
// .get()
// .then(function(body){
//   console.log('Body: ' + body);
// })
// .fail(function(err){
//   console.log('Error: ' + err);
// });

var firebase = require("firebase");
firebase.initializeApp({
  serviceAccount: "./TestDB-f04b2dc8559a.json",
  databaseURL: "https://testdb-4ffc4.firebaseio.com"
});

var db = firebase.database();

var ref = db.ref("users_arr");


// ref.set([
// 	{
// 		username: 'rafaelquines',
//     	date_of_birth: "1986-08-07",
//     	full_name: "Rafael Quines"
//   	},
//   	{
// 	  	username: "rafaelquines2",
// 	    date_of_birth: "1986-08-08",
// 	    full_name: "Rafael Quines 2"
// 	}
// ]);

ref.on("value", function(snapshot) {
  console.log('ret: ', snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// ref.set({
//   rafaelquines: {
//     date_of_birth: "1986-08-07",
//     full_name: "Rafael Quines"
//   },
//   rafaelquines2: {
//     date_of_birth: "1986-08-08",
//     full_name: "Rafael Quines 2"
//   }
// });

// var ref = db.ref("restricted_access/secret_document");
// ref.once("value", function(snapshot) {
//   console.log('ret: ' + snapshot.val());
// });