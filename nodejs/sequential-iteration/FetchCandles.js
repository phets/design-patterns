import superagent from 'superagent'

export function FetchCandles (symbol, interval, startTime, howMany, cb) {
  if ( howMany === 0) {
    return process.nextTick(cb)
  }

  const url = "https://api.binance.com/api/v1/klines"

  const query = {
      symbol: symbol,
      interval: interval,
      limit: 1
  }
  if (startTime != null) { query.startTime = startTime }

  superagent.get(url)
  .query(query)
  .end((err, res) => {
    if (err) { return cb(err); }

    const [[
      openTime,
      open,
      high,
      low,
      close,
      volume,
      closeTime,
    ]] = res.body

    console.log(`T:${closeTime}\tO:${open}\tH:${high}\tL:${low}\tC:${close}\tV:${volume}`)

    return FetchCandles(symbol, interval, openTime - 3600000, howMany - 1, cb)
  });
}
