'use strict';

var dynamoose = require('dynamoose');

var customerSchema = new dynamoose.Schema({
    id: {
        type: Number,
        hashKey: true
    },
    name: {
        type: String,
        required: true,
        
    }
}, {
    timestamps: true
});

var Customer = dynamoose.model('Customer', customerSchema);

module.exports = Customer;