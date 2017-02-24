var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost')
 
client.on('connect', function () {
	console.log("Connected on mqtt broker");
	client.subscribe('/#');
})
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log('Msg received on topic ' + topic);
  //var obj = JSON.parse(message);
  console.log('Msg: ', message.toString());
  // client.end()
})