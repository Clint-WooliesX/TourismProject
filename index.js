function openNav(){
    var navHeight = parseInt(document.getElementById("navigation-bar").style.height)
    console.log("button clicked",navHeight)
    if(navHeight == 0 ||isNaN(navHeight)){
    document.getElementById("navigation-bar").style.height = "240px"
    }else{
        document.getElementById("navigation-bar").style.height = "0px"
    }
}
