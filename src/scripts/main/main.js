require('./main.css');

const builder = require('../elementBuilder');
const content = '<h2>Current Date</h2>';

module.exports = builder(
'main', content, 'main'
);