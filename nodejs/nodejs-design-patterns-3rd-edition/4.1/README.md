# 4.1 File concatenation
Write the implementation of `concatFiles()` , a
callback-style function that takes two or more paths to text files in the filesystem and a destination file:
```javascript
function concatFiles (srcFile1, srcFile2, srcFile3, ... ,
dest, cb) {
// ...
}
```
This function must copy the contents of every source file into the destination file, respecting the order of the files, as provided by the arguments list. For instance, given two files, if the first file contains *foo* and the second file contains *bar*, the function should write *foobar* (and not *barfoo*) in the destination file. Note that the preceding example signature is not valid JavaScript syntax: you need to find a different way to handle an arbitrary number of arguments. For instance, you could use the **rest parameters** syntax ( [nodejsdp.link/rest-parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) ).