function openImg(event,altText){
    console.log("image clicked src returned = ",event)
var theImage=event;
var caption=altText;
console.log("isrc stored in var = ",theImage)
document.getElementById("zoomedImage").src = theImage
document.getElementById("zoomImg").style.display = "flex"
 
console.log("image alt text = ",caption);
document.getElementById("galleryCaption").innerHTML=caption;
}



function closeImage(){
    document.getElementById("zoomImg").style.display = "none"
}