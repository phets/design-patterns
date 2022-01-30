import fs from "fs";
import path from "path";
import superagent from "superagent";
import mkdirp from "mkdirp";
import { urlToFilename } from "./utils.js";

// A function that downlaods a url to a file.
export function spider(url, cb) {
    // The name of the file where we want to save.
    const filename = urlToFilename(url);

    fs.access(filename, (err) => {
        // If we get a ENOENT error the file doesn't exist.
        if (err && err.code === "ENOENT") {
            console.log(`Downloading ${url} into ${filename}`);
            superagent.get(url).end((err, res) => {
                // Send the rror to the callback if we couldn't download.
                if (err) {
                    cb(err);
                } else {
                    // Create the directory for the file.
                    mkdirp(path.dirname(filename), (err) => {
                        // Send any error creating the directory to the callback.
                        if (err) {
                            cb(err);
                        } else {
                            // Finally write the file.
                            fs.writeFile(filename, res.text, (err) => {
                                if (err) {
                                    // Send any error writing the file to the callback.
                                    cb(err);
                                } else {
                                    // Send the name of the written file to the callback,
                                    // and true because we actually downloaded the url.
                                    cb(null, filename, true);
                                }
                            });
                        }
                    });
                }
            });
        } else {
            // Here fs.access didn't return an error, which means that the file
            // already exists and could be accessed.
            // Send to the callback the filename and false->We didn't download.
            cb(null, filename, false);
        }
    });
}
