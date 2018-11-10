const fs = require('file-system');
const currentDate = require('./date');
const dir_name = 'date_dir';
const file_name = 'current_date';
const promise = new Promise((resolve, reject) => {
        fs.mkdir(dir_name, (err) => {
            if (err)
                return reject(err);
            resolve(dir_name);
        });
    });

promise.then( 
  (data) => new Promise((resolve, reject) => {
        fs.writeFile(data + '/' + file_name + '.txt', currentDate(), (err) => {
            if (err)
                return reject(err);
            resolve(console.log('File ' + file_name +  ' created!'));
        });
    })
);
