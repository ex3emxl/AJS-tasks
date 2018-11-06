const read = require('./read');

//read('name.txt', text => console.log(text));

//> node main.js
//Ilia


//const read = require('./read');
//
read('name.txt')
    .then(text => console.log(text))
    .catch(err => console.log(err));
