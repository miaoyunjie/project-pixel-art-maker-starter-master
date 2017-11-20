// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
// 这样调用：

function makeGrid() {
// Your code goes here!
	if (getQueryString("height") === null || getQueryString("width") === null){
		return null;
	} else {
		$("#input_height").attr("value",getQueryString("height"));
		$("#input_width").attr("value",getQueryString("width"));
		for (let i = 0; i < getQueryString("height"); i++) {
			$("table").append("<tr></tr>");
		}
		for (let j = 0; j < getQueryString("width"); j++){
			$("tr").append("<td></td>");
		}
	}
}

$("#input_submit").click(makeGrid());

$("tr").each(function(){
	$(this).children("td").click(function(){
		$(this).css("background-color",$("#colorPicker").val());
	});
});