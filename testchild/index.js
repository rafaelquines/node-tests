//'frontail --ui-highlight /var/log/easyio/easyio.log'


var exec = require('child_process').exec;
var cmd = 'frontail --ui-highlight /var/log/easyio/easyio.log';

exec(cmd, function(error, stdout, stderr) {
  // command output is in stdout
  console.log('Out: ', stdout);
  console.log('Err: ', stderr);
  console.log('Error2: ', error);
});

console.log('aquiii');
// setInterval(function() {
//     console.log('loop');
// }, 1000);
