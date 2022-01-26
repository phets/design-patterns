import Logger from './Logger.js';

let logger = new Logger();

class Dog {

    constructor(name) {
        this._name = name;
        logger.log(`New dog: ${name}`);
    }

}

export default Dog;