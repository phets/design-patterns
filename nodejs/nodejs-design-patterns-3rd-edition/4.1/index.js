import { readFileSync, createWriteStream } from 'fs'

function concatFiles (dest, cb, ...files) {
  // Create a WriteStream to write our output.
  const outStream = createWriteStream(dest, { flags: 'a' })
  // Read input files one by one and write their contents to outStream
  files.forEach(file => {
    try {
      const buffer = readFileSync(file)
      outStream.write(buffer)
    } catch (error) {
      cb(error)
    }
  })
  return cb(null, dest)
}

concatFiles('destination.txt', (err) => { console.error(err) }, 'file1.txt', 'file2.txt', 'file3.txt')
