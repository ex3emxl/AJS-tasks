require('./header.css');
import builder from '../elementBuilder';
//const builder = require('../elementBuilder');
const content = '<a href="/">Logo</a>';

export default builder(
'header', content, 'header'
);
