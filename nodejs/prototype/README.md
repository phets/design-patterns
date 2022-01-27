# Prototype pattern
The concept of the prototype pattern is to copy (*clone*) an existing instance of an object rather than creating a new instance.

This pattern is especially useful when:
- Creating a new instance is a costly operation. Maybe it involves some high latency network operation or some complex calculation.
- Initializing new instances requires a lot of code that would be repeated.
- Specific configurations of the parent class are necessary in bulk but subclassing is to be avoided. (e.g. You don't want to create a subclass for every kind of product.)

In the **anti-pattern** example we create a new instance of the `Graduate` class for each engineer and set all the properites each time.

We put an artificial delay in the constuctor to simulate a costly operation and analyse the performance difference between pattern and anti-pattern. Every time we create a new instance we have to wait for 500 milliseconds.

The delay quickly adds up when creating multiple instances as we see by the time elapsed at the end of the example.

Also, all engineers and all life sciences graduates take the same three basic courses but we are setting them manually for each engineer duplicating lots of code.

In the **pattern** example we add the `clone` method to the `Graduate` class.

```javascript
clone() {
    const cloned = Object.create( Object.getPrototypeOf(this) );
    cloned._name = this._name;
    cloned._subject = this._subject;
    cloned._courses = [...this._courses];

    return cloned;
}
```
The `clone` method creates a new object based on the prototype of the calling object and then copies the its properties, thereby avoiding the call to the constructor.

By cloning an object that is already populated with the common properties (the courses) we also avoid having to set these properties every time.



