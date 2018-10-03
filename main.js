let profileTemplateString = document.getElementById('template').innerHTML;
console.log(profileTemplateString);

let renderProfile = Handlebars.compile(profileTemplateString);
$('#loading').html('Loading...')




Handlebars.registerHelper('link', function(text) {
  text = Handlebars.Utils.escapeExpression(text);
   
  // url  = Handlebars.Utils.escapeExpression(url);

  var result = '<a href="https://www.instagram.com/' + text + '" target="_blank">' +'instagram: ' +text + '</a>';

  return new Handlebars.SafeString(result);
});


$.getJSON('https://thejsguy.com/teaching/2018/api/v2/restaurants.json').then((items) =>{
	// console.log(restaurants);

	//'restaunrants' is the key for the template/handler to recognize

	let renderedProfiles = renderProfile({restaurants: items.data
	});




	$('#results').append(renderedProfiles);
  	$('#loading').html('')





});

