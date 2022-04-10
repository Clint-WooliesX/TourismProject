function openImg(event){
    console.log("image clicked src returned = ",event)
var theImage=event;
console.log("isrc stored in var = ",theImage)
document.getElementById("zoomedImage").src = theImage
document.getElementById("zoomImg").style.display = "flex"
}

function closeImage(){
    document.getElementById("zoomImg").style.display = "none"
}