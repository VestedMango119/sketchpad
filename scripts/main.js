//declare variables to be used globally

var gridWidth = 500;
var rows =16;
var square = rows*rows;
var rowSize;

//create the initial 16x16 grid when loading the page
$(document).ready(function(){
	rowSize = gridWidth/(rows +2);
	createGrid();
});

//this button removes the current grid and prompts the user for a new size of grid
//the new grid is created based on the user input to fit the 500px by 500px area
$("#clear").on('click', function(){
	rows = prompt("How many rows in the next grid?");
	square = rows*rows;
	rowSize = (gridWidth/rows) - 2;
	rowSize = rowSize + "px";

	$(".rows").remove();
	createGrid();

});

//takes the number of rows and creates a div in the html for each square in the grid
//sets the size of the squares based on how many there are to fit in a 500px by 500px grid
function createGrid(){

	for(var j=1; j<=square; j++){
 		$("<div>", {"class": "rows"}).appendTo($("#grid"));
 		makeSquare();
		$(".rows").hover(function() {
			$(this).css("background-color", "red");
			}, function() {
			$(this).css("background-color", "red");
		});
 	}
}

function makeSquare(){

 		$(".rows").css("width", rowSize);
 		$(".rows").css("height", rowSize);
 	}

$("#color").on("click", function(){
	alert("Random colours on");
	var random;
	$(".rows").hover(function() {
			random = randomColour();
			$(this).css("background-color", random);
			}, function() {
			$(this).css("background-color", random);
		});
});

function randomColour(){
	random = '#' + Math.floor(Math.random() * 16777215).toString(16);
	return random;
}





