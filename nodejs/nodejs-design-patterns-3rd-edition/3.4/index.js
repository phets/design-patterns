import EventEmitter from 'events'

// Calls the callback cb after 'milliseconds'.
// Returns an EventEmitter that emits a 'tick' event
// every 1000ms until the callback is triggered.
function delayedCallback (milliseconds, cb) {
  const emitter = new EventEmitter()
  const tickCount = 1

  // Emit a tick event asynchronously when the function starts
  process.nextTick(() => emitter.emit('tick', tickCount, milliseconds))

  // Recursive function that is called every 1000ms until the
  // the time has come to trigger the callback.
  function goAround (milliseconds, tickCount, emitter, cb) {
    if (milliseconds > 1000) {
      tickCount++
      setTimeout(() => {
        emitter.emit('tick', tickCount, milliseconds - 1000)
        goAround(milliseconds - 1000, tickCount, emitter, cb)
      }, 1000)
    } else {
      // The null 3rd parameter is the (no) error.
      setTimeout(cb, milliseconds, null, tickCount)
    }
  }

  goAround(milliseconds, tickCount, emitter, cb)

  // On every tick event emit an error if the current timestamp
  // is divisible by 5. Also propagate the error through the callback.
  emitter.on('tick', (tickCount, milliseconds) => {
    const nowTimestamp = Date.now()
    if (nowTimestamp % 5 === 0) {
      // Create a new generic Error object.
      const err = new Error(`Timestamp ${nowTimestamp} is divisible by 5`)
      // Emit the error event.
      emitter.emit('error', err)
      // Call the callback with the error which
      // is always the first parameter.
      cb(err)
    }
  })
  return emitter
}

delayedCallback(6001, (err, tickCount) => {
  // Handle the error in the callback by logging and returning early.
  if (err) {
    return console.error(`ERROR handled by callback: ${err.message}`)
  }
  console.log(`Callback called. Total ticks: ${tickCount}`)
})
  .on('tick', (tickCount, milliseconds) => {
    console.log(`tick ${tickCount} - ${milliseconds}`)
  })
  // Event listener for the error event.
  .on('error', (err) => {
    console.error(`ERROR handled by listener: ${err.message}`)
  })
