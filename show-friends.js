	// Add the names of everyone at your table   
	var friends = ['Alex', 'Elyse', 'Mae', 'Sartaj'];

	var list = "<ul>"

	// Create your for loop here
	// HINT: the string should 
	// look like '<li>' + friends[x] + "</li>" + ....

	for(var i = 0; i < friends.length; i ++) {
  		list += "<li>"+ friends[i] + "</li>";

	}

	list = list + '</ul>'
	
	console.log(list);
	console.log('body');

	// Use jQuery to select the body tag on the index and 
	// append the finish table string
	$("body").append(list);

