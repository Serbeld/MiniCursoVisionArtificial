
var image_name = "files/ImagenFoto.jpg";

//Original Image
var image = new Image();
image.onload = imageLoaded;
image.src = image_name;

//Image to grayscale
var image2 = new Image();
image2.onload = imageLoaded2;
image2.src = image_name;

//Image to convolutions
var image3 = new Image();
image3.onload = imageLoaded3;
image3.src = image_name;

//Image to convolutions
var image4 = new Image();
image4.onload = imageLoaded4;
image4.src = image_name;

//Image to convolutions
var image5 = new Image();
image5.onload = imageLoaded5;
image5.src = image_name;

//Image to segmentation
var image6 = new Image();
image6.onload = imageLoaded6;
image6.src = image_name;

//Image to segmentation
var image7 = new Image();
image7.onload = imageLoaded7;
image7.src = image_name;

//Image to segmentation
var image8 = new Image();
image8.onload = imageLoaded8;
image8.src = image_name;

//Shows the original image
function imageLoaded(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0, image.width, image.height)
}

//Shows the grayscale image
function imageLoaded2(){
    var canvas = document.getElementById("canva_gray");
    var ctx = canvas.getContext("2d");

    canvas.width = image2.width;
    canvas.height = image2.height;

    ctx.drawImage(image2, 0, 0, image2.width, image2.height)

    //Gray scale
    gray_scale(canvas);
}

//Shows the convolutioned image
function imageLoaded3(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = image3.width;
    canvas.height = image3.height;

    ctx.drawImage(image3, 0, 0, image3.width, image3.height)

    var result = document.getElementById("conv_image")
    //convolution
    conv(canvas, result);
}

//Shows the convolutioned image2
function imageLoaded4(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = image4.width;
    canvas.height = image4.height;

    ctx.drawImage(image4, 0, 0, image4.width, image4.height)

    var result2 = document.getElementById("conv_image2")

    //convolution
    conv2(canvas, result2);
}

//Shows the convolutioned image3
function imageLoaded5(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = image5.width;
    canvas.height = image5.height;

    ctx.drawImage(image5, 0, 0, image5.width, image5.height)

    var result3 = document.getElementById("conv_image3")

    //convolution
    conv3(canvas, result3);
}

//Shows the convolutioned bin 1 Red
function imageLoaded6(){
    var canvas = document.getElementById("conv_image4");
    var ctx = canvas.getContext("2d");

    canvas.width = image6.width;
    canvas.height = image6.height;

    ctx.drawImage(image6, 0, 0, image6.width, image6.height)

    //segmentation
    bin1(canvas);
}

//Shows the convolutioned bin 2 green
function imageLoaded7(){
    var canvas = document.getElementById("conv_image5");
    var ctx = canvas.getContext("2d");

    canvas.width = image6.width;
    canvas.height = image6.height;

    ctx.drawImage(image6, 0, 0, image6.width, image6.height)

    //segmentation
    bin2(canvas);
}

//Shows the convolutioned bin 3 Blue
function imageLoaded8(){
    var canvas = document.getElementById("conv_image6");
    var ctx = canvas.getContext("2d");

    canvas.width = image6.width;
    canvas.height = image6.height;

    ctx.drawImage(image6, 0, 0, image6.width, image6.height)

    //segmentation
    bin3(canvas);
}

//Segmentations
//bin1 Red
function bin1(canvas){
    var ctx = canvas.getContext("2d");
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var pixels = imgData.data;
    //[Red_1, Green_1, Blue_1, Alpha_1, Red_2, Green_2, Blue_2, Alpha_2...]
    //console.log(imgData)

    for (var p=0; p < pixels.length; p += 4){
        var red = pixels[p];

        bin = 0;
        if(red >= 210){
            bin = 255;
        }

        pixels[p] = bin;
        pixels[p+1] = bin;
        pixels[p+2] = bin;
        pixels[p+3] = 255;
    }

    ctx.putImageData(imgData, 0, 0);
}

//Segmentations
//bin2 green
function bin2(canvas){
    var ctx = canvas.getContext("2d");
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var pixels = imgData.data;
    //[Red_1, Green_1, Blue_1, Alpha_1, Red_2, Green_2, Blue_2, Alpha_2...]
    //console.log(imgData)

    for (var p=0; p < pixels.length; p += 4){
        var green = pixels[p+1];

        bin = 0;
        if(green >= 210){
            bin = 255;
        }

        pixels[p] = bin;
        pixels[p+1] = bin;
        pixels[p+2] = bin;
        pixels[p+3] = 255;
    }

    ctx.putImageData(imgData, 0, 0);
}

//Segmentations
//bin3 blue
function bin3(canvas){
    var ctx = canvas.getContext("2d");
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var pixels = imgData.data;
    //[Red_1, Green_1, Blue_1, Alpha_1, Red_2, Green_2, Blue_2, Alpha_2...]
    //console.log(imgData)

    for (var p=0; p < pixels.length; p += 4){
        var blue = pixels[p+2];

        bin = 0;
        if(blue >= 210){
            bin = 255;
        }

        pixels[p] = bin;
        pixels[p+1] = bin;
        pixels[p+2] = bin;
        pixels[p+3] = 255;
    }

    ctx.putImageData(imgData, 0, 0);
}


//This function helps to make the image in grayscale
function gray_scale(canvas){
    var ctx = canvas.getContext("2d");
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var pixels = imgData.data;
    //[Red_1, Green_1, Blue_1, Alpha_1, Red_2, Green_2, Blue_2, Alpha_2...]
    //console.log(imgData)

    for (var p=0; p < pixels.length; p += 4){
        var red = pixels[p];
        var green = pixels[p+1];
        var blue = pixels[p+2];
        var alpha = pixels[p+3];

        //gray
        var gray = (red + green + blue) / 3;

        pixels[p] = gray;
        pixels[p+1] = gray;
        pixels[p+2] = gray;
    }

    ctx.putImageData(imgData, 0, 0);
}

//This function makes the convolutional operations
function conv(canvasRoot, canvasDest){
    //Get all the vars needed
    var ctxRoot = canvasRoot.getContext("2d");
    var imgDataRoot = ctxRoot.getImageData(0, 0, canvasRoot.width, canvasRoot.height)
    var pixelsRoot = imgDataRoot.data;

    canvasDest.width = canvasRoot.width;
    canvasDest.height = canvasRoot.height;
    
    var ctxDest = canvasDest.getContext("2d");
    var imgDataDest = ctxDest.getImageData(0, 0, canvasDest.width, canvasDest.height)
    var pixelsDest = imgDataDest.data;

    //Kernel (Core)
    var kernel = [
        [-1, -1, -1],
        [-1, 8, -1],
        [-1, -1, -1],
    ];

    for (var y=1; y < canvasRoot.height; y++){
        for (var x=1; x < canvasRoot.width; x++){
            //Position
            var idx = ((y*canvasRoot.width) + x)*4;

            //Positions
            var position_1 = kernel[0][0] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_2 = kernel[0][1] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_3 = kernel[0][2] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_4 = kernel[1][0] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_5 = kernel[1][1] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_6 = kernel[1][2] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_7 = kernel[2][0] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];
            var position_8 = kernel[2][1] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];
            var position_9 = kernel[2][2] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];

            var result = position_1 + position_2 + position_3 +
            position_4 + position_5 + position_6 +
            position_7 +  position_8 + position_9;

            pixelsDest[idx] = result; //Red
            pixelsDest[idx+1] = result; //Green
            pixelsDest[idx+2] = result; //Blue
            pixelsDest[idx+3] = pixelsRoot[idx+3]; //Alpha 
            
        }
    }

    ctxDest.putImageData(imgDataDest, 0, 0);
}

//This function makes the convolutional operations 2
function conv2(canvasRoot, canvasDest){
    //Get all the vars needed
    var ctxRoot = canvasRoot.getContext("2d");
    var imgDataRoot = ctxRoot.getImageData(0, 0, canvasRoot.width, canvasRoot.height)
    var pixelsRoot = imgDataRoot.data;

    canvasDest.width = canvasRoot.width;
    canvasDest.height = canvasRoot.height;
    
    var ctxDest = canvasDest.getContext("2d");
    var imgDataDest = ctxDest.getImageData(0, 0, canvasDest.width, canvasDest.height)
    var pixelsDest = imgDataDest.data;

    //Kernel (Core)
    var kernel = [
        [ 0, -1,  0],
        [-1,  5, -1],
        [ 0, -1,  0],
    ];

    for (var y=1; y < canvasRoot.height; y++){
        for (var x=1; x < canvasRoot.width; x++){
            //Position
            var idx = ((y*canvasRoot.width) + x)*4;

            //Positions
            var position_1 = kernel[0][0] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_2 = kernel[0][1] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_3 = kernel[0][2] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_4 = kernel[1][0] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_5 = kernel[1][1] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_6 = kernel[1][2] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_7 = kernel[2][0] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];
            var position_8 = kernel[2][1] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];
            var position_9 = kernel[2][2] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];

            var result = position_1 + position_2 + position_3 +
            position_4 + position_5 + position_6 +
            position_7 +  position_8 + position_9;

            pixelsDest[idx] = result; //Red
            pixelsDest[idx+1] = result; //Green
            pixelsDest[idx+2] = result; //Blue
            pixelsDest[idx+3] = pixelsRoot[idx+3]; //Alpha 
            
        }
    }

    ctxDest.putImageData(imgDataDest, 0, 0);
}


//This function makes the convolutional operations 3 Sobel
function conv3(canvasRoot, canvasDest){
    //Get all the vars needed
    var ctxRoot = canvasRoot.getContext("2d");
    var imgDataRoot = ctxRoot.getImageData(0, 0, canvasRoot.width, canvasRoot.height)
    var pixelsRoot = imgDataRoot.data;

    canvasDest.width = canvasRoot.width;
    canvasDest.height = canvasRoot.height;
    
    var ctxDest = canvasDest.getContext("2d");
    var imgDataDest = ctxDest.getImageData(0, 0, canvasDest.width, canvasDest.height)
    var pixelsDest = imgDataDest.data;

    //Kernels (Core)
    var sobelVertical= [
        [-1, 0, 1],
        [-2, 0, 2],
        [-1, 0, 1],
    ];
    var sobelHorizontal= [
        [-1,-2,-1],
        [ 0, 0, 0],
        [ 1, 2, 1],
    ];

    for (var y=1; y < canvasRoot.height; y++){
        for (var x=1; x < canvasRoot.width; x++){
            //Position
            var idx = ((y*canvasRoot.width) + x)*4;

            //Positions
            var position_1_y = sobelVertical[0][0] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_2_y = sobelVertical[0][1] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_3_y = sobelVertical[0][2] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_4_y = sobelVertical[1][0] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_5_y = sobelVertical[1][1] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_6_y = sobelVertical[1][2] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_7_y = sobelVertical[2][0] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];
            var position_8_y = sobelVertical[2][1] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];
            var position_9_y = sobelVertical[2][2] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];

            var result_y = position_1_y + position_2_y + position_3_y +
            position_4_y + position_5_y + position_6_y +
            position_7_y +  position_8_y + position_9_y;

            
            //Positions
            var position_1_x = sobelHorizontal[0][0] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_2_x = sobelHorizontal[0][1] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_3_x = sobelHorizontal[0][2] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_4_x = sobelHorizontal[1][0] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_5_x = sobelHorizontal[1][1] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_6_x = sobelHorizontal[1][2] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_7_x = sobelHorizontal[2][0] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];
            var position_8_x = sobelHorizontal[2][1] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];
            var position_9_x = sobelHorizontal[2][2] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];

            var result_x = position_1_x + position_2_x + position_3_x +
            position_4_x + position_5_x + position_6_x +
            position_7_x +  position_8_x + position_9_x;

            //Magnitude
            var mag = Math.sqrt((result_x*result_x) + (result_y*result_y) )

            pixelsDest[idx] = mag; //Red
            pixelsDest[idx+1] = mag; //Green
            pixelsDest[idx+2] = mag; //Blue
            pixelsDest[idx+3] = 255; //Alpha 
            
        }
    }

    ctxDest.putImageData(imgDataDest, 0, 0);
}


//This function makes the convolutional operations 3 Sobel
function conv3(canvasRoot, canvasDest){
    //Get all the vars needed
    var ctxRoot = canvasRoot.getContext("2d");
    var imgDataRoot = ctxRoot.getImageData(0, 0, canvasRoot.width, canvasRoot.height)
    var pixelsRoot = imgDataRoot.data;

    canvasDest.width = canvasRoot.width;
    canvasDest.height = canvasRoot.height;
    
    var ctxDest = canvasDest.getContext("2d");
    var imgDataDest = ctxDest.getImageData(0, 0, canvasDest.width, canvasDest.height)
    var pixelsDest = imgDataDest.data;

    //Kernels (Core)
    var sobelVertical= [
        [-1, 0, 1],
        [-2, 0, 2],
        [-1, 0, 1],
    ];
    var sobelHorizontal= [
        [-1,-2,-1],
        [ 0, 0, 0],
        [ 1, 2, 1],
    ];

    for (var y=1; y < canvasRoot.height; y++){
        for (var x=1; x < canvasRoot.width; x++){
            //Position
            var idx = ((y*canvasRoot.width) + x)*4;

            //Positions
            var position_1_y = sobelVertical[0][0] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_2_y = sobelVertical[0][1] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_3_y = sobelVertical[0][2] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_4_y = sobelVertical[1][0] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_5_y = sobelVertical[1][1] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_6_y = sobelVertical[1][2] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_7_y = sobelVertical[2][0] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];
            var position_8_y = sobelVertical[2][1] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];
            var position_9_y = sobelVertical[2][2] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];

            var result_y = position_1_y + position_2_y + position_3_y +
            position_4_y + position_5_y + position_6_y +
            position_7_y +  position_8_y + position_9_y;

            
            //Positions
            var position_1_x = sobelHorizontal[0][0] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_2_x = sobelHorizontal[0][1] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_3_x = sobelHorizontal[0][2] * pixelsRoot[(((y-1)*canvasRoot.width) + (x-1))*4];
            var position_4_x = sobelHorizontal[1][0] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_5_x = sobelHorizontal[1][1] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_6_x = sobelHorizontal[1][2] * pixelsRoot[(((y)*canvasRoot.width) + (x))*4];
            var position_7_x = sobelHorizontal[2][0] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];
            var position_8_x = sobelHorizontal[2][1] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];
            var position_9_x = sobelHorizontal[2][2] * pixelsRoot[(((y+1)*canvasRoot.width) + (x+1))*4];

            var result_x = position_1_x + position_2_x + position_3_x +
            position_4_x + position_5_x + position_6_x +
            position_7_x +  position_8_x + position_9_x;

            //Magnitude
            var mag = Math.sqrt((result_x*result_x) + (result_y*result_y) )

            pixelsDest[idx] = mag; //Red
            pixelsDest[idx+1] = mag; //Green
            pixelsDest[idx+2] = mag; //Blue
            pixelsDest[idx+3] = 255; //Alpha 
            
        }
    }

    ctxDest.putImageData(imgDataDest, 0, 0);
}
