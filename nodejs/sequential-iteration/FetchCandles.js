import superagent from 'superagent'
import { intervalToMilliseconds } from './BinanceHelpers.js'

/**
 * Funtion to fetch a number of candles back in time one at a time.
 * @param {string} symbol - The symbol to fetch. e.g. BTCUSDT
 * @param {string} interval - The candle size in the Binance API format. e.g. 1m, 4h, 3d
 * @param {int} startTime - The timestamp of the start of the candle.
 * @param {int} howMany - How many candles to fetch back in time.
 * @param {function} cb - The callback for when the function finishes or returns an error.
 * @returns 
 */
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

    const milliseconds = intervalToMilliseconds(interval)

    return FetchCandles(symbol, interval, openTime - milliseconds, howMany - 1, cb)
  });
}
