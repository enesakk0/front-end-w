function closeNav() {
    document.getElementById("menu-icon-close").style.display = "none";
    document.getElementById("header-mobile-menu").style.visibility = "hidden";
    document.getElementById("header-mobile-menu").style.left = "-100px";
    document.getElementById("header-mobile-menu").style.marginLeft = "500px";
    document.getElementById("header-mobile-menu").style.width = "0px"; 
    document.getElementById("header-mobile-menu").style.fontSize = "0px";
}


function openNav() {
    document.getElementById("menu-icon-close").style.display = "block";
    document.getElementById("header-mobile-menu").style.visibility = "visible";
    document.getElementById("header-mobile-menu").style.width = "300px";    
    document.getElementById("header-mobile-menu").style.left = "140px";
    document.getElementById("header-mobile-menu").style.marginLeft = "20px";
}