'use strict';
var dynamoose = require('dynamoose');
// dynamoose.local();
dynamoose.AWS.config.loadFromPath("./AWS.config.json");

var Customer = require('./models/customer.js');

// var customer;
// for (var i = 0; i < 10; i++) {
//     customer = new Customer({ id: (i + 1), name: "Rafael " + (i + 1) });
//     customer.save();
// }
var customer = new Customer();
customer.id = 2;
customer.name = 'Quines';

customer.save(function(err) {
    if(err) {
        console.log("Erro ao salvar: ", err);
    } else {
        console.log("Salvo com sucesso");
    }
});


// Customer.scan().exec(function(err, customers) {
//     if (err) {
//         console.log("Err: ", err);
//     } else {
//         customers.forEach(function(el) {
//             console.log(el.id + ' - ' + el.name);
//         }, this);
//     }
// });