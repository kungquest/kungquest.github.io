require('babel-core/register');
 
var test = require('./test1.js');
 
test('aa', 'b', 22, 43);
console.log("test");
// arg: b bar: 22
// arg: 22 bar: 22
// arg: 43 bar: 22
// done: b :: 22