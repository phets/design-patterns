# 3.4 Playing with errors
Modify the function created in exercise 3.3 so that
it produces an error if the timestamp at the moment of a `tick` (including the
initial one that we added as part of exercise 3.3) is divisible by 5. Propagate
the error using both the callback and the event emitter. Hint: use `Date.now()`
to get the timestamp and the remainder ( % ) operator to check whether the
timestamp is divisible by 5.
# Solution
Add a listener for the `tick` event inside the `delayedCllback` function.

In this listener check if the current timestamp if divisible by 5.
```javascript
const nowTimestamp = Date.now()
if (nowTimestamp % 5 === 0) { ... }
```
If it is, create and error object
```javascript
const err = new Error(`Timestamp ${nowTimestamp} is divisible by 5`)
```
and emit an error event + propagate the error to the callback.
```javascript
// Emit the error event.
emitter.emit('error', err)
// Call the callback with the error which
// is always the first parameter.
cb(err)
```