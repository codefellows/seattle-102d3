var howMany = function() {
    var count = prompt('how many things do you want to order?');

    while ( isNaN(count) ) {
        count = prompt('please enter a number - how many things?')
    }

    return Number(count);
}

howMany();

var logAll = function() {
    for (var i = 0; i < 20; i++) {
        console.log(i);
    }
}

logAll();