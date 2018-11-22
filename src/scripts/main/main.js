require('./main.scss');
import builder from '../elementBuilder';
//const builder = require('../elementBuilder');
const content = '<h2>Current Date</h2>';

export default builder(
'main', content, 'main'
);