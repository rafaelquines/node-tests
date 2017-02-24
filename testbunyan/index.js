var bunyan = require('bunyan');
var log = bunyan.createLogger({
    name: "myapp",
    streams: [{
        type: 'rotating-file',
        path: '/var/log/easyio/easyio.log',
        period: '1d',
        count: 3
    }]
});
log.info("Rafae Quines teste");
