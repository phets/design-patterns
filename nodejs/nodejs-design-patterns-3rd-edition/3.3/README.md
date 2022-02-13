# 3.3 A simple modification
Modify the function created in exercise 3.2 so that
it emits a `tick` event immediately after the function is invoked.

# Solution
Emit the first `tick` event asynchronously by using 
```javascript
process.nextTick(() => emitter.emit('tick', tickCount, milliseconds))
```