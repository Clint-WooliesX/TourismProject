var pathToImgs = "/gallery-images/gallery-img"
var ext = ".JPG"
var preloads = 16

var tempImg = [];

for (var x = 1; x < preloads; x++) {
  tempImg[x] = new Image();
  tempImg[x].src = pathToImgs+x+ext;
  console.log(pathToImgs + x + ext+" loaded to cache");
}
