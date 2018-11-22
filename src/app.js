//const header = require('./scripts//header/header');
import header from './scripts/header';
import main from './scripts/main';
import footer from './scripts/footer';
//const main = require('./scripts/main/main');
//const footer = require('./scripts/footer/footer');

require('./app.scss');

document
        .body.appendChild(header);
document
        .body.appendChild(main);
document
        .body.appendChild(footer);
