const Logger =require('./Logger');

var logger = new Logger();

class Cat {

    constructor(name) {
        this._name = name;
        logger.log(`New cat: ${name}`);
    }

}

module.exports = Cat;