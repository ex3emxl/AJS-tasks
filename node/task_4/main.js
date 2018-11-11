const fs = require('file-system');
const currentDate = require('./date');
const dirName = 'date_dir';
const fileName = 'current_date';
const promise = new Promise((resolve, reject) => {
        fs.mkdir(dirName, (err) => {
            if (err)
                return reject(err);
            resolve(dirName);
        });
    });

promise.then( 
  (data) => new Promise((resolve, reject) => {
        fs.writeFile(data + '/' + fileName + '.txt', currentDate(), (err) => {
            if (err)
                return reject(err);
            resolve(console.log('File ' + fileName +  ' created!'));
        });
    })
);
