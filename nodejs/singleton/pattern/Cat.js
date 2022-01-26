import Logger from './Logger.js';

let logger = new Logger();

class Cat {

    constructor(name) {
        this._name = name;
        logger.log(`New cat: ${name}`);
    }

}

export default Cat;