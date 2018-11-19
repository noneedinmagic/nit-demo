import './scss/base.scss';

// console.log('Hello Hacker!');

console.log(`The time is ${new Date()}`);

require('./modules/hello')('NIT');
var _foo = require('./modules/hello');
_foo('user1');
_foo('user2');
