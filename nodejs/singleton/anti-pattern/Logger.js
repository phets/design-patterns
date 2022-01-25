class Logger {

    constructor() {
        this._logs = [];
    }

    get count() {
        return this._logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this._logs.push({timestamp, message});
        console.log(`[${timestamp}] ${message}`);
    }
    
}

module.exports = Logger;