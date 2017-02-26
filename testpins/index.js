"use strict"

var Gpio = require('pigpio').Gpio;
//input 1
var in1 = new Gpio(6, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
});

var in2 = new Gpio(5, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
});

in1.on('interrupt', function (level) {
    console.log(new Date() + 'Input1: ' + level);
});

in2.on('interrupt', function (level) {
    console.log(new Date() + 'Input2: ' + level);
});
