# Callback Discipline / Callback Hell
When using callbacks it is easy to slip into what is known as _Callback Hell_.

Callback Hell is where the code has several levels of indentation making it very difficult to read.

The abuse of in-place function definitions quickly leads to callback hell.

In the **anti-pattern**, the `Spider.js` module is a clear example of callback hell. It is sometimes also referred to as the _pyramid of doom_, due to how the increasing levels of indentation give rise to a pyramid shape.

### The Pyramid of Doom in the Spider.js module
```javascript
fs.access(filename, (err) => {
    if (err && err.code === "ENOENT") {
        superagent.get(url).end((err, res) => {
            if (err) {
                cb(err);
            } else {
                mkdirp(path.dirname(filename), (err) => {
                    if (err) {
                        cb(err);
                    } else {
                        fs.writeFile(filename, res.text,(err) => {
                            if (err) {
                                cb(err);
                            } else {
                                cb(null, filename, true);
                            }
                        });
                    }
                });
            }
        });
    } else {
        cb(null, filename, false);
    }
});
```

The patterns to use to avoid callback hell are early return and avoiding in-place function definitions, opting instead for named functions.

In the **pattern** we apply both these principles in the `Spider.js` module.

1. We extract the functionality to save data to a file into a separate named function `saveFile`.
2. We extract the functionality to download the data into a separate named funtion `download` that uses `saveFile`.
3. In all functions we use the **early return principle**. When we encounter an error we return from the function eliminating the need to enclose the remaining code in an `else` block.

With the early return principle we go from
```javascript
if (err) {
    callback (err);
} else {
    // ...
    // Rest of the code gains an indentation
    // ...
}
```
to
```javascript
if (err) {
    return callback(err);
}
// ...
// Rest of the code is back where it belongs
// ...