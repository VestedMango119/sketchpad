$(document).ready(function(){
	var rows =16;
	var square = rows;
	var initSize = 500/(rows +2);

for(var i=1; i<=rows; i++){
	for(var j=1; j<=square; j++){
 		var $row = $("<div>", {"class": "rows"});
 		$("#grid").append($row);
 		$(".rows").css("width", initSize);
 		$(".rows").css("height", initSize);
		}
	}
});

var gridWidth = 500;
var square;
var rowSize;

$("#clear").on('click', function(){
	$(".rows").remove();


	rows = prompt("How many rows in the next grid?");
	square = rows;
	rowSize = (gridWidth/rows) - 2;
	rowSize = rowSize + "px";
	createGrid();

});

/*
$('.rows').on('click', function(){
	$(this).css('background-color', '#ff0000');
});

$("#grid.rows").on({
    mouseenter: function () {
        var p = $(this).css("background-color","#ff0000");
    },
    mouseleave: function () {
        $(this).attr("background-color","#ff0000");
    }
});
*/

function createGrid(){
	for(var i=1; i<=rows; i++){
	for(var j=1; j<=square; j++){
 		var $row = $("<div>", {"class": "rows"});
 		$("#grid").append($row);
 		$(".rows").css("width", rowSize)
 		$(".rows").css("height", rowSize);

	}
}
}
/*
$('.rows').on('click', function(){
	$(this).attr("background-color", "#ff0000");
})*/
