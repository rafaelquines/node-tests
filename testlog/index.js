var winston = require('winston');

winston.add(winston.transports.File, { filename: "logs.txt"});

winston.log('info', 'Teste 123');
winston.info('essa eh uma msg de info');