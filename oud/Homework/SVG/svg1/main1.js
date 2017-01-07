/**************************************
Data Prossessing
SVG 1
main1.js

By Eelco Alink <eelco.alink@gmail.com>

                ====
                \\// 
           <=>===[]===<=>
                 []
                 []
                 []
                _[]_
                \  /
                 \/

Functions to change colors of the map
****************************************/

/* use this to test out your function */
window.onload = function() {
	changeColor('fra', "green");
	changeColor('rsa', "purple");
	changeColor('swe', "orange");
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
    id_country = document.getElementById(id);
    id_country.style.fill = color;          
}