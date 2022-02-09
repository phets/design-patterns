import { EventEmitter } from 'events'
import { readFile } from 'fs'

class FindRegex extends EventEmitter {
  constructor (regex) {
    super()
    this.regex = regex
    this.files = []
  }

  addFile (file) {
    this.files.push(file)
    return this
  }

  find () {
    // Emit start event asynchronously like all other events.
    // If the event were triggered synchronously the listener
    // would have to be registered before the find() method is
    // invoked.
    process.nextTick(() => this.emit('start', this.files))

    for (const file of this.files) {
      readFile(file, 'utf8', (err, content) => {
        if (err) {
          return this.emit('error', err, file)
        }

        this.emit('fileread', file)

        const match = content.match(this.regex)
        if (match) {
          match.forEach(elem => this.emit('found', file, elem))
        }
      })
    }
    return this
  }
}

const findRegexInstance = new FindRegex(/hello \w+/)

// Take file list from parameters.
const fileList = process.argv.slice(2)
for (const fileName of fileList) { findRegexInstance.addFile(fileName) }
findRegexInstance
  .find()
  .on('start', (files) => console.log(`Start searching in files ${files}`))
  .on('found', (file, match) => console.log(`Matched "${match}" in file ${file}`))
  .on('error', (err, file) => {
    if (err.code === 'EISDIR') {
      console.log(`${file} is a directory. Ignoring.`)
    } else {
      console.error(`Error emitted ${err.message}`)
    }
  })
