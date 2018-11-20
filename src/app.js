const header = require('./scripts//header/header');
const main = require('./scripts/main/main');
const footer = require('./scripts/footer/footer');

require('./app.css');

document
        .body.appendChild(header);
document
        .body.appendChild(main);
document
        .body.appendChild(footer);
