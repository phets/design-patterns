import EventEmitter from 'events'

// Calls the callback cb after 'milliseconds'.
// Returns an EventEmitter that emits a 'tick' event
// every 1000ms until the callback is triggered.
function delayedCallback (milliseconds, cb) {
  const emitter = new EventEmitter()
  const tickCount = 0

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
      setTimeout(cb, milliseconds, tickCount)
    }
  }

  goAround(milliseconds, tickCount, emitter, cb)
  return emitter
}

delayedCallback(6001, (tickCount) => { console.log(`Callback called. Totl ticks: ${tickCount}`) })
  .on('tick', (tickCount, milliseconds) => { console.log(`tick ${tickCount} - ${milliseconds}`) })
