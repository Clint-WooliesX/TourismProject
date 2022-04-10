function openNav(){
    var navHeight = parseInt(document.getElementById("navigation-bar").style.height)
    console.log("button clicked",navHeight)
    if(navHeight == 0 ||isNaN(navHeight)){
    document.getElementById("navigation-bar").style.height = "240px"
    }else{
        document.getElementById("navigation-bar").style.height = "0px"
    }
}

function reportResize(){
    console.log("window is being resized")
    document.getElementById("navigation-bar").style.height = "0px"
    if(window.innerWidth >900){
       document.getElementById("navigation-bar").style.height = "60px" 
    }
}

window.onresize = reportResize;
