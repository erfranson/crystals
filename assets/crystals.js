var randNum = Math.floor(Math.random() *(120 - 19) + 19);
var blue = Math.floor(Math.random() *(12 - 1) + 1);
var red = Math.floor(Math.random() *(12 - 1) + 1);
var green = Math.floor(Math.random() *(12 - 1) + 1);
var yellow = Math.floor(Math.random() *(12 - 1) + 1);
var wins = 0;
var losses = 0;
var score = 0;

$('#randomNum').html(randNum);
crystals();
$('.blue').on('click', function() {
	console.log(blue);
	 score += blue;
	 winsLoss();
	 $('.score').html(score);
});
$('.red').on('click', function() {
	console.log(red);
	score += red;
	winsLoss();
	$('.score').html(score);
});
$('.green').on('click', function() {
	
	console.log(green);
	score += green;
	winsLoss();
	$('.score').html(score);
});
$('.yellow').on('click', function() {
	console.log(yellow);
	score += yellow;
	winsLoss();
	$('.score').html(score);
});

function winsLoss(){
	if (score === randNum){
		wins++;
		$('.wins').html(wins);
		reset();
	} else if (score > randNum){
		losses++;
		$('.losses').html(losses);
		reset();
	}
};

function reset() {
	score = 0;
	randNum = Math.floor(Math.random() *(120 - 19) + 19);
	$('#randomNum').html(randNum);
	blue = Math.floor(Math.random() *(12 - 1) + 1);
	red = Math.floor(Math.random() *(12 - 1) + 1);
	green = Math.floor(Math.random() *(12 - 1) + 1);
	yellow = Math.floor(Math.random() *(12 - 1) + 1);
};

function crystals() {
	if(blue === yellow){
		blue = Math.floor(Math.random() *(12 - 1) + 1);
	} else if (blue === red) {
		blue = Math.floor(Math.random() *(12 - 1) + 1);
	} else if(blue === green) {
		blue = Math.floor(Math.random() *(12 - 1) + 1);
	};

	if(red === yellow){
		red = Math.floor(Math.random() *(12 - 1) + 1);
	} else if(red === green) {
		red = Math.floor(Math.random() *(12 - 1) + 1);
	} else if (red === blue){
		red = Math.floor(Math.random() *(12 - 1) + 1);
	};

	if(green === yellow){
		green = Math.floor(Math.random() *(12 - 1) + 1);
	} else if (green === blue){
		green = Math.floor(Math.random() *(12 - 1) + 1);
	} else if(green === red) {
		green = Math.floor(Math.random() *(12 - 1) + 1);
	}


	if(yellow === red){
		yellow = Math.floor(Math.random() *(12 - 1) + 1);
	} else if(yellow === green) {
		yellow = Math.floor(Math.random() *(12 - 1) + 1);
	} else if (yellow === blue){
		yellow = Math.floor(Math.random() *(12 - 1) + 1);
	}
};