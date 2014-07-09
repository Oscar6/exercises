// Add the names of everyone at your table   
var friends = [];

var createList = function() {
	var list = ""

	for(var i  = 0; i < friends.length; i += 1) {
		list = list + '<li>' + friends[i] + 
		'<button data-id="' + i + '">remove</button></li>'
	}


	$("ul").html(list);
}

createList();

var addFriend = function(name) {
	friends.push(name); 
	createList();
}

var removeFriend = function(index) {
	// console.log(index);
	friends.splice(index, 1);
	createList();
}
	

$("body").on('click', 'button', function(){
	if ($(this).hasClass('add')) {
		addFriend($("input").val());
		$("input").val("")
	} else {
		removeFriend($(this).attr("data-id"));
	}
		

});

// $(".remove").click(function(){
	// console.log("here");
	// 
// });






// Use jQuery to select the body tag on 
//the index and append the finish table string


