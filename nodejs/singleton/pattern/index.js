import Logger from './Logger.js';
import Cat from './Cat.js';
import Dog from './Dog.js';

const logger = new Logger();

logger.log('Starting app...');

const candelaria = new Cat('Candelaria');
const batman = new Dog('Batman');

logger.log('Finished app.');

console.log(`${logger.count} logs total.`);