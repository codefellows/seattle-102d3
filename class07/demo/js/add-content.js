
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
  var item;

  if (order === 'house') {
    item = '<img src="images/house.png" >';
  } else if (order === 'hotel') {
    item = '<img src="images/hotel.png" >';
  } else {
    item = '<strong>No items were ordered</strong>'
  }

  return item;
}
