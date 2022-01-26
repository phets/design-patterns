let instance = null;

class Logger {

    constructor() {
        if(!instance) {
            instance = this;
        }
        this._logs = [];
        return instance;
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

export default Logger;