import EventEmitter from 'events'

function delayedCallback (milliseconds, cb) {
  const emitter = new EventEmitter()
  const tickCount = 0

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
