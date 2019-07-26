
function createGreeting(hourNow) {
  console.log('Value of hourNow parameter is', hourNow);
  var greeting;

  if (hourNow > 18) {
    greeting = 'Good evening!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome!';
  }

  return '<h3>' + greeting + '</h3>'
}

var showOrder = function() {
  var order = prompt('What would you like to order today?');
  var howMany = prompt('How many ' + order + 's would you like?');
  howMany = Number(howMany);
  var item;
  var result = '';

  while ( isNaN(howMany) ) {
    howMany = prompt('Please enter a numeric value for how many you want:');
    howMany = Number(howMany);
  }
  
  if (order === 'house') {
    item = '<img src="images/house.png" >';
  } else if (order === 'hotel') {
    item = '<img src="images/hotel.png" >';
  } else {
    item = '<strong>No items were ordered</strong>'
  }
  
  result = '<p>Here are your ' + howMany + ' ' + order + 's:</p>';

  for (var iterator = 1; iterator <= howMany; iterator = iterator + 1) {
    result = result + '<p> House #' + iterator + item + '</p>';
  }

  return result;
}
