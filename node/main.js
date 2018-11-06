const weather = require('yahoo-weather');

weather('kharkov') 
.then(data => { console.log(data.description); console.log(data.item.condition);  }) 
.catch(console.log);
