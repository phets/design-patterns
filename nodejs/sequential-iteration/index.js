import { FetchCandles } from './FetchCandles.js'

const symbol = 'BTCUSDT'
const interval = '4h'
const howMany = 100

FetchCandles(symbol, interval, null, howMany, (err) => {
  console.error(err)
  process.exit(1)
})