//declare variables to be used globally

var gridWidth = 800;
var rows =16;
var square = rows*rows;
var rowSize;

//create the initial 16x16 grid when loading the page
$(document).ready(function(){
	rowSize = gridWidth/(rows +2);
	createGrid();
});

//define the clear button functionality
//this button removes the current grid and promts the user for a new size of grid
//the new grid is created based on the user input to fit the 500px by 500px area
$("#clear").on('click', function(){
	rows = prompt("How many rows in the next grid?");
	square = rows*rows;
	rowSize = (gridWidth/rows) - 2;
	rowSize = rowSize + "px";

	$(".rows").remove();

	createGrid();

});

//Declare the createGrid function
//takes the number of rows squared and creates a div in the html for each square in the grid
//sets the size of the squares based on how many there are to fit in a 500px by 500px grid
function createGrid(){

	for(var j=1; j<=square; j++){
 		$("<div>", {"class": "rows"}).appendTo($("#grid"));
	}
}

function makeSquare(){

 		$(".rows").css("width", rowSize);
 		$(".rows").css("height", rowSize);
 	}

$("#grid .rows").on({
    mouseover: function () {
        $(this).css("background-color","#ff0000");
    },
    mouseout: function () {
        $(this).attr("background-color","#ff0000");
    }
});

