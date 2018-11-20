require('./header.css');
const builder = require('../elementBuilder');
const content = '<a href="/">Logo</a>';

module.exports = builder(
'header', content, 'header'
);
