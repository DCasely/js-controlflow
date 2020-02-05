// var answer = prompt('Are We There Yet?');

// while (answer !== 'yes' && answer !== 'yeah') {
//   var answer = prompt('Are We There Yet?');
// }

// alert('YAY, WE MADE IT!!!');

// if (answer === 'yes') {
//   alert('YAY, We made it!');
// } else {
//   var answer = prompt('Are We There Yet?');
// }

// VERSION 2

var answer = prompt('Are We There Yet?');

while (answer.indexOf('yes') === -1) {
  var answer = prompt('Are We There Yet?');
}

alert('YAY, WE MADE IT!!!');
