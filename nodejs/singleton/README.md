# Singleton pattern
The singleton design pattern is used for cases when there must only exist a single instance of a particular class.

Here we use the typical example of a logger class.

In the anti-pattern example, a separate instance of the logger class is created in each of the `Cat.js`, `Dog.js` and `index.js` files.

This has the effect that, while all messages get logged, each instance only stores the messages passed through it and not those through the other instances.
When we call the count method at the end of the example we get the wrong result of 2, which are the 2 log messages *Starting app...* and *Finished app.* logged by index.js.