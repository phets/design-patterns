// We only import the factory method createImage.
import createImage from "./Image.js";

// We use the same factory method to create all types of images.
const myBMPImage = createImage('bmp');
const myJPGImage = createImage('jpg');
const myPNGImage = createImage('png');

myBMPImage.resize(800, 600);
myJPGImage.resize(800, 600);
myPNGImage.resize(800, 600);