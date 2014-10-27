function onLoadInit(){
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	var hueAdditionFactor=0,saturation=100,brightness=66;
	var defaultRedHue=0;
	var defaultGreenHue=88;
	var defaultBlueHue=171;
	var colorCodeRed= "hsla("+(defaultRedHue+hueAdditionFactor)+","+saturation+"%,"+brightness+"%,1)";    
	var colorCodeGreen= "hsla("+(defaultGreenHue+hueAdditionFactor)+","+saturation+"%,"+brightness+"%,1)";                                var colorCodeBlue= "hsla("+(defaultBlueHue+hueAdditionFactor)+","+saturation+"%,"+brightness+"%,1)"; 
	var colorCode=[colorCodeRed,colorCodeGreen,colorCodeBlue];

	//var colorCode=["hsla(0,100%,66%,1)","hsla(88,100%,66%,1)","hsla(171,100%,66%,1)"];

	updateScene();
	drawScene();		

	console.log(colorCode);


function updateScene(){
	colorCodeRed= "hsla("+(defaultRedHue+hueAdditionFactor)+","+saturation+"%,"+brightness+"%,1)";    
	colorCodeGreen= "hsla("+(defaultGreenHue+hueAdditionFactor)+","+saturation+"%,"+brightness+"%,1)"; 				      colorCodeBlue= "hsla("+(defaultBlueHue+hueAdditionFactor)+","+saturation+"%,"+brightness+"%,1)"; 
	colorCode=[colorCodeRed,colorCodeGreen,colorCodeBlue];
}

function drawScene(){			
	for(x=0;x<1024;x+=50){
		for(y=0;y<768;y+=50){
			context.fillStyle=colorCode[Math.floor(Math.random()*1)];
			context.fillRect(x,y,25,25);
		}
	}

	for(x=25;x<1050;x+=50){
		for(y=25;y<768;y+=50){
			context.fillStyle=colorCode[1+Math.floor(Math.random()*2)];
			context.fillRect(x,y,25,25);
		}
	}	

	var imageHand = new Image();
	imageHand.src = "handImage.png";
	imageHand.width = 512;
	imageHand.height= 384;
	imageHand.onload = function() {
	context.drawImage(imageHand, 0, 0);
	};
}

/* Update the Hue Saturation Brightness Values
// Here I make updates into the Hue, Sat and Brightness Values 
// that are collected from the 3 sliders
*/

function changeHueValue(newValue){
	hueAdditionFactor=newValue;
	console.log(colorCode);
	updateScene();
	drawScene();
}		

function changeSaturationValue(newValue){
	saturation=newValue;
	console.log(colorCode);
	updateScene();
	drawScene();
} 

function changeBrightnessValue(newValue){
	brightness=newValue;
	console.log(colorCode);
	updateScene();
	drawScene();
} 

}
