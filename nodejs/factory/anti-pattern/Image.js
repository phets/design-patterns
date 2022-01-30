class Image {

    constructor() {
        console.log("Created an Image object.");
    }

    resize() {
        console.log("Cannot resize without knowing the type of image.");
    }

}

class BMPImage extends Image {

    constructor() {
        super();
        console.log("Created a BMPImage object.");
    }

    resize(width, height) {
        console.log(`Resized BMPImage to ${width}x${height}`);
    }

}

class JPGImage extends Image {

    constructor() {
        super();
        console.log("Created a JPGImage object.");
    }

    resize(width, height) {
        console.log(`Resized JPGImage to ${width}x${height}`);
    }

}

class PNGImage extends Image {

    constructor() {
        super();
        console.log("Created a PNGImage object.");
    }

    resize(width, height) {
        console.log(`Resized PNGImage to ${width}x${height}`);
    }

}

export { BMPImage,  JPGImage, PNGImage };

