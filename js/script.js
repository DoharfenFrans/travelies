function switch_circle(id){
    var arrow = document.getElementById("arrow");
    var color_arr = document.getElementById("color-arrow");
    var compass_title = document.getElementById("compass-text")
    var compass_img = document.getElementById("compass-img")

    var rotateDeg = "rotate-0"
    var color = "--c2-100"
    var title = "Hiking"
    var src = "./assets/Mask_group_h.png"
    var goto = "#hiking-section"


    if (id === "hiking") {
        rotateDeg = "rotate-0"
        color = "var(--c2-100)"
        title = "Hiking"
        src = "./assets/Mask_group_h.png"
        goto = "#hiking-section"

    } else if(id === "fishing"){
        rotateDeg = "rotate-90"
        color = "var(--c3-100)"
        title = "Fishing"
        src = "./assets/Mask_group_f.png"
        goto = "#fishing-section"

    } else if(id === "camping"){
        rotateDeg = "rotate-180"
        color = "var(--c4-100)"
        title = "Camping"
        src = "./assets/Mask_group_c.png"
        goto = "#camping-section"
    }

    setTimeout(function(){
        // document.getElementById('arrow').classList.add(rotateClass);
        arrow.setAttribute("class", rotateDeg)
        color_arr.style.fill = color
        compass_title.innerHTML = title
        compass_title.setAttribute("href", goto);
        compass_img.setAttribute("src", src);
        const tcs = document.querySelectorAll('.hero-text-b');
        tcs.forEach(tc => {
            tc.style.color = color
        });

    }, 100);

}

function navAdjust() {
    var nav = document.getElementById('navbar');
    if (nav.className === "navbar-menu" || nav.className === "navbar-menu-scrolled") {
      nav.className += " responsive";
    } else {
      nav.classList.remove("responsive");
    }
}

function arrowDown() {
    var el = document.getElementById('dropdown-arr')
    el.className = "fa fa-angle-down"
}

function arrowUp() {
    var el = document.getElementById('dropdown-arr')
    el.className = "fa fa-angle-up"
}

function switch_browse(id){
    var box = document.getElementById("browse-box-btm");
    var poster_img = document.getElementById("poster");
    
    var color1 = "--c2-dark"
    var color2 = "--c2-85"
    var src = "./assets/hiking_poster.png"

    if (id === "browse-title-h") {
        color1 = "var(--c2-dark)"
        color2 = "var(--c2-85)"
        src = "./assets/hiking_poster.png"
        var titleboxes = document.getElementById("browse-title-h");
        titleboxes.style.zIndex = 1;
        var titleboxes = document.getElementById("browse-title-f");
        titleboxes.style.zIndex = 0;
        var titleboxes = document.getElementById("browse-title-c");
        titleboxes.style.zIndex = 0;

    } else if(id === "browse-title-f"){
        color1 = "var(--c3-dark)"
        color2 = "var(--c3-85)"
        src = "./assets/fishing_poster.png"
        var titleboxes = document.getElementById("browse-title-h");
        titleboxes.style.zIndex = 0;
        var titleboxes = document.getElementById("browse-title-f");
        titleboxes.style.zIndex = 1;
        var titleboxes = document.getElementById("browse-title-c");
        titleboxes.style.zIndex = 0;

    } else if(id === "browse-title-c"){
        color1 = "var(--c4-dark)"
        color2 = "var(--c4-85)"
        src = "./assets/camping_poster.png"
        var titleboxes = document.getElementById("browse-title-h");
        titleboxes.style.zIndex = 0;
        var titleboxes = document.getElementById("browse-title-f");
        titleboxes.style.zIndex = 0;
        var titleboxes = document.getElementById("browse-title-c");
        titleboxes.style.zIndex = 1;
    }

    setTimeout(function(){
        box.style.backgroundColor = color1
        poster_img.style.backgroundImage = "url("+src+")"
        const els1 = document.querySelectorAll('.browse-form input');
        els1.forEach(el => {
            el.style.backgroundColor = color2
        });
        const els2 = document.querySelectorAll('.browse-form select');
        els2.forEach(el => {
            el.style.backgroundColor = color2
        });

    }, 100);
}

var nav = document.getElementById('navbar');
window.onscroll = function () { 
    "use strict";
    if(document.body.clientWidth >= 800){
        if (document.body.scrollTop >= 85 || document.documentElement.scrollTop >= 85) {
            nav.style.backgroundColor = "var(--c1-100)";
            nav.style.position = "fixed"
        } 
        else {
            nav.style.backgroundColor = "var(--c1-85)";
            nav.style.position = "absolute"
        }
    }
};

var package_dropdown = document.getElementById("packages");
if(package_dropdown.value != "default" || package_dropdown.onclick()){
    package_dropdown.style.textAlign = "left"
}else{
    package_dropdown.style.textAlign = "right"
}

if((package_dropdown.onmouseleave() && package_dropdown.value != "default")){
    package_dropdown.style.textAlign = "left";
}else{
    package_dropdown.style.textAlign = "right"
}

function show_info(id){
    var el = document.getElementById(id);
    var el_arr = document.getElementById(id.charAt(4)+"-arr-"+ id.charAt(id.length - 1));
    

    if(el.style.display.length != 0){
        if(el_arr.className === "fa fa-angle-double-up"){
            el_arr.className = "fa fa-angle-double-down";
        } 
        else if(el_arr.className === "fa fa-angle-double-down"){
            el_arr.className = "fa fa-angle-double-up";
        } 
    }

    if(el.style.display === "none"){
        el.style.display = "grid";
    }else{
        el.style.display = "none";
    }
    

}
