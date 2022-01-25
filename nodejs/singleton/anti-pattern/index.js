const Logger =require('./Logger');
const Cat = require('./Cat.js');
const Dog = require('./Dog.js');

const logger = new Logger();

logger.log('Starting app...');

const candelaria = new Cat('Candelaria');
const batman = new Dog('Batman');

logger.log('Finished app.');

console.log(`${logger.count} logs total.`);