# Singleton pattern
The singleton design pattern is used for cases when there must only exist a single instance of a particular class.

Here we use the typical example of a logger class.

## Anti-pattern
In the **anti-pattern** example, each of the `Cat.js`, `Dog.js` and `index.js` files creates a new instance of the Logger class.

This has the effect that, while all messages get logged, each instance only stores the messages passed through it and not those through the other instances.

When we call the count method at the end of the example we get the wrong result of 2

These are the 2 log messages *Starting app...* and *Finished app.* logged by index.js.

## Pattern
In the **pattern** example the constructor for the `Logger` class is modified to:
1. Check whether an instance already exists.
2. Return the instance.

The pattern now ensures that we are always using the same singleton instance of the Logger class. We verify this by seeing that the `count` returns the correct number of log messages.

