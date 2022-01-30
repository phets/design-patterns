// We need to import a class for each type of image we want to manage
import { BMPImage, JPGImage, PNGImage } from "./Image.js";

// We need to call a different constructor for each type of image
const myBMPImage = new BMPImage();
const myJPGImage = new JPGImage();
const myPNGImage = new PNGImage();

myBMPImage.resize(800, 600);
myJPGImage.resize(800, 600);
myPNGImage.resize(800, 600);