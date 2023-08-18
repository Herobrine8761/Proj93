var canvas = new fabric.Canvas('myCanvas');


block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var block_image_object= "";

function new_image(get_image){
	fabric.Image.fromURL(get_image, function(Img){
		block_image_object = Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({top:block_y,left:block_x});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
	if(keyPressed == '82'){
		block_x = 10;
		new_image('red.jpg');
		console.log("R key pressed, summoning Red Ranger out of nowhere... Done!");
	}
	if(keyPressed == '71'){
		block_x = 310;
		new_image('green.png');
		console.log("G key pressed, dropping Green Ranger from the skies... Done!");
	}
	if(keyPressed == '89'){
		block_x = 560;
		new_image('yellow.png');
		console.log("Y key pressed, snipping Yellow Ranger to front_page... Done!");
	}
	if(keyPressed == '80'){
		block_x = 880;
		new_image('pink.png');
		console.log("P key pressed, forcing in Pink Ranger from behind the stage... Done!")
	}
	if(keyPressed == '66'){
		block_x = 1040;
		new_image('blue.png');
		console.log("B key pressed, draining the oceans and bringing Blue Ranger... Done!");
	}
}

