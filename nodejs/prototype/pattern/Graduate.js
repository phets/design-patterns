class Graduate {

    constructor () {
        // Here we simulate a slow operation that takes half a second
        let start = new Date();
        let finish = new Date();
        while( finish.getTime() - start.getTime() < 500 ) {
            finish = new Date();
        }
        
        this._courses = [];
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get subject() {
        return this._subject;
    }

    set subject(subject) {
        this._subject = subject;
    }

    get courses() {
        return this._courses;
    }

    addCourse(course) {
        this._courses.push(course);
    }

    clone() {
        const cloned = Object.create( Object.getPrototypeOf(this) );
        cloned._name = this._name;
        cloned._subject = this._subject;
        cloned._courses = [...this._courses];

        return cloned;
    }

}

export default Graduate;