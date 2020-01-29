  var floatMiles, floatGallons, floarMpg;
     floatMiles = parseFloat(prompt("Enter miles driven"));
     floatGallons = parseFloat(prompt("Enter gallons of gas used"));
     floatMpg = parseFloat(floatMiles/floatGallons);
     alert("Miles per gallon = " + floatMpg);