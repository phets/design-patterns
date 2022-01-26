import Logger from './Logger.js';

var logger = new Logger();

class Cat {

    constructor(name) {
        this._name = name;
        logger.log(`New cat: ${name}`);
    }

}

export default Cat;