
//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function () 
{

//lines 12-18 declares and sets variables with respective DOM input. lines 19-25 declare variables needed for calculations
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);
	var floatRectArea;
	var floatRectPerim;
	var floatS;
	var floatTriangleArea;
	var floatTrianglePerim;
	var floatCircleArea;
	var floatCircleCircum;	

//calculate the rectangle area and perimeter
	floatRectArea = floatRectWidth * floatRectHeight;
	floatRectPerim = 2 * floatRectWidth + 2 * floatRectHeight;

//calculate the triangle area using Heron's formula (don't remember it? look it up...) and perimeter	
	floatS = (floatTriSide2 + floatTriSide2 + floatTriSide3)/2;
	floatTriangleArea = Math.sqrt((floatS*(floatS-floatTriSide1)*(floatS-floatTriSide2)*(floatS-floatTriSide3)));
	floatTrianglePerim = floatTriSide1 + floatTriSide2 + floatTriSide3;

//calculate the circle area and circumference using convenient Math Object methods	
	floatCircleArea = Math.PI * Math.pow(floatRadius,2);
	floatCircleCircum = 2 * Math.PI * floatRadius;  
	
	alert ("The Rectangle area is " + floatRectArea.toFixed(2) + " and the perimeter is " + floatRectPerim.toFixed(2) + "\n\n" +
		"The Triangle area is " + floatTriangleArea.toFixed(2) + " and the perimeter is " + floatTrianglePerim.toFixed(2) + "\n\n" +
		"The Circle area is " + floatCircleArea.toFixed(2) + " and the circumference is " + floatCircleCircum.toFixed(2));

};

/*
 * the calcCircleCircum function is activated when the calc_circle_cirum button on the DOM
 * is clicked.  It reads the radius information from the DOM and then reports the circle
 * circumference in an alert box, using the circleCircum function to perform the calculation
 */
var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};

function circleCircum(floatRadius_par)
{
	var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
	return floatCircum.toFixed(2);
}

var calcRectArea = function ()
{
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);
    alert ("The Rectangle area is "+"\n\n"+ rectArea(floatRectWidth, floatRectHeight));
};

function rectArea(floatRectWidth_par, floatRectHeight_par)
{
  var floatRectArea = floatRectWidth_par * floatRectHeight_par;
  return floatRectArea.toFixed(2);
}

var calcRectPerim = function ()
{
  var floatRectWidth = parseFloat($("rect_width").value);
  var floatRectHeight = parseFloat($("rect_height").value);
  alert ("The Rectangle perimeter is"+"\n\n"+ rectPerim(floatRectWidth, floatRectHeight));
};

function rectPerim(floatRectWidth, floatRectHeight)
{
  var floatRectPerim = 2 * floatRectWidth + 2 * floatRectHeight;
  return floatRectPerim.toFixed(2); 
}
var calcTrianglePerim = function ()
{
  var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
  alert ("The Triangle perimeter is"+"\n\n"+ trianglePerim(floatTriSide1, floatTriSide2, floatTriSide3));
};

function trianglePerim(floatTriSide1, floatTriSide2, floatTriSide3)
{
  var floatTrianglePerim = floatTriSide1 + floatTriSide2 + floatTriSide3;
  return floatTrianglePerim.toFixed(2);
}
var calcTriangleArea = function ()
{
  var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
  var floatS = (floatTriSide2 + floatTriSide2 + floatTriSide3)/2;
  alert ("The Triangle area is"+"\n\n"+ triangleArea(floatTriSide1, floatTriSide2, floatTriSide3, floatS));
};

function triangleArea (floatTriSide1, floatTriSide2, floatTriSide3, floatS)
{
  var floatTriangleArea = Math.sqrt((floatS*(floatS-floatTriSide1)*(floatS-floatTriSide2)*(floatS-floatTriSide3)));
  return floatTriangleArea.toFixed(2);
}

var calcCircleArea = function()
{
  var floatRadius = parseFloat($("radius").value);
  alert ("The Circle area is "+ "\n\n"  + circleArea(floatRadius));
};

function circleArea (floatRadius)
{
  var floatCircleArea = Math.PI * Math.pow(floatRadius,2);
  return floatCircleArea.toFixed(2);
}


window.onload = function () 
{
    //lines 51-56 clear the DOM values..
//    $("rect_width").value = "";
//    $("rect_height").value = "";
//    $("tri_side1").value = "";
//    $("tri_side2").value = "";
//    $("tri_side3").value = "";
//    $("radius").value = "";
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
    $("calc_rect_area").onclick = calcRectArea; 
    $("calc_rect_perim").onclick = calcRectPerim; 
    $("calc_tri_perim").onclick = calcTrianglePerim; 
    $("calc_tri_area").onclick = calcTriangleArea; 
    $("calc_circle_area").onclick = calcCircleArea; 
};