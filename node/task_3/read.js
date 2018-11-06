const fs = require('fs');
const read = (name) =>
    new Promise((resolve, reject) => {
        fs.readFile(name, (err, data) => {
            if (err)
                return reject(err);
            resolve(data.toString('utf8'));
        });
    });

module.exports = read;
