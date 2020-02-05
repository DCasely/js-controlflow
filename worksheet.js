var count = 5;

while (count <= 20) {
  console.log('count is: ' + count);
  count++;
}
var count = 5;

while (count <= 20) {
  console.log('count is: ' + count);
  count += 2;
}

// string we're looping over:
var str = 'hello';
// first character is at index 0
var count = 0;

while (count < str.length) {
  console.log(str[count]);
  count++;
}

var num = 1;

while (num <= 10) {
  console.log(num);
  num += 2;
}

var num = 1;

while (num <= 20) {
  if (num % 4 === 0) {
    console.log(num);
  }
  num++;
}

// FOR LOOPS

for (var count = 1; count < 6; count++) {
  console.log(count);
}

// VERSUS USING A WHILE LOOP

var count = 1;

while (count < 6) {
  console.log('count is: ' + count);
  count++;
}

// FOR LOOP

var str = 'hello';

for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// VERSUS USING A WHILE LOOP

var str = 'hello';
var count = 0;

while (count < str.length) {
  console.log(str[count]);
  count++;
}

// FOR LOOP EXERCISE

for (var i = 0; i < 16; i += 8) {
  console.log(i);
}

var str = 'ahceclwlxo';

for (var i = 1; i < str.length; i += 2) {
  console.log(str[i]);
}
