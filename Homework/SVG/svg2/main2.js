/**************************************
Data Prossessing
SVG 2
main2.js

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
/* colorbrewers colorschema*/
var colors = ['#fff7ec','#fee8c8','#fdd49e','#fdbb84','#fc8d59','#ef6548','#d7301f','#b30000','#7f0000'];

/* use this to test out your function */
window.onload = function() {
	for (j = 0; j < 35; j++) {
		if (Number(obj.points[j].data) >= 0 && Number(obj.points[j].data) <= 9) { changeColor(obj.points[j].country,colors[0]); }
		else if (Number(obj.points[j].data) >= 10 && Number(obj.points[j].data) <= 24) { changeColor(obj.points[j].country,colors[1]); }
		else if (Number(obj.points[j].data) >= 25 && Number(obj.points[j].data) <= 49) { changeColor(obj.points[j].country,colors[2]); }
		else if (Number(obj.points[j].data) >= 50 && Number(obj.points[j].data) <= 74) { changeColor(obj.points[j].country,colors[3]); }
		else if (Number(obj.points[j].data) >= 75 && Number(obj.points[j].data) <= 99) { changeColor(obj.points[j].country,colors[4]); }		
		else if (Number(obj.points[j].data) >= 100 && Number(obj.points[j].data) <= 149) { changeColor(obj.points[j].country,colors[5]); }
		else if (Number(obj.points[j].data) >= 150 && Number(obj.points[j].data) <= 299) { changeColor(obj.points[j].country,colors[6]); }
		else if (Number(obj.points[j].data) >= 300 && Number(obj.points[j].data) <= 499) { changeColor(obj.points[j].country,colors[7]); }
		else if (Number(obj.points[j].data) >= 500) { changeColor(obj.points[j].country,colors[8]); }
		else { changeColor(obj.points[j].country, 'yellow'); }
	}
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
    id_country = document.getElementById(id);
    id_country.style.fill = color;
    id_country.style.stroke = "brown";          
};

/* JSON of county by abbreviation and population density */
var text = '{ "points" : [' +
	'{ "country":"pt" , "data":"117" },' +
	'{ "country":"mk" , "data":"81" },' +
	'{ "country":"sk" , "data":"111" },' +
	'{ "country":"is" , "data":"3" },' +
	'{ "country":"ro" , "data":"91" },' +
	'{ "country":"pl" , "data":"123" },' +
	'{ "country":"rs" , "data":"93" },' +
	'{ "country":"gr" , "data":"82" },' +
	'{ "country":"cz" , "data":"135" },' +
	'{ "country":"no" , "data":"16" },' +
	'{ "country":"at" , "data":"98" },' +
	'{ "country":"es" , "data":"94" },' +
	'{ "country":"bg" , "data":"62" },' +
	'{ "country":"fr" , "data":"103" },' +
	'{ "country":"hr" , "data":"79" },' +
	'{ "country":"si" , "data":"98" },' +
	'{ "country":"ie" , "data":"69" },' +
	'{ "country":"al" , "data":"105" },' +
	'{ "country":"ch" , "data":"195" },' +
	'{ "country":"by" , "data":"46" },' +
	'{ "country":"ba" , "data":"76" },' +
	'{ "country":"ua" , "data":"73" },' +
	'{ "country":"it" , "data":"205" },' +
	'{ "country":"md" , "data":"106" },' +
	'{ "country":"lt" , "data":"54" },' +
	'{ "country":"nl" , "data":"406" },' +
	'{ "country":"se" , "data":"22" },' +
	'{ "country":"gb" , "data":"262" },' +
	'{ "country":"fi" , "data":"16" },' +
	'{ "country":"de" , "data":"227" },' +
	'{ "country":"hu" , "data":"107" },' +
	'{ "country":"lv" , "data":"34" },' +
	'{ "country":"be" , "data":"342" },' +
	'{ "country":"ee" , "data":"28" },' +
	'{ "country":"dk" , "data":"125"} ]}';

/* parsing json into javascript object */
var obj = JSON.parse(text);
console.log(obj);

