const Logger =require('./Logger');

var logger = new Logger();

class Dog {

    constructor(name) {
        this._name = name;
        logger.log(`New dog: ${name}`);
    }

}

module.exports = Dog;