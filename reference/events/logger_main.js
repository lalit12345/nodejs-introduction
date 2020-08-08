const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('called listner', data));

logger.log('Hello world');