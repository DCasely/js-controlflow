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