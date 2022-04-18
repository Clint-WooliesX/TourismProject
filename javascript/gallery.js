function openImg(event,altText){
    console.log("image clicked src returned = ",event)
var theImage=event;
var caption=altText;
console.log("isrc stored in var = ",theImage)
document.getElementById("full-size-gallery").src = theImage;
document.getElementById("curtain").style.display = "flex"
 
console.log("image alt text = ",caption);
document.getElementById("galleryCaption").innerHTML=caption;
}

function closeImage(){
    document.getElementById("curtain").style.display = "none"
}