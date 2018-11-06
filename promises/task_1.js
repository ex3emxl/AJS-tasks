const promiseCreator = (time, text) =>
    new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(text);
        }, time);
    });

const prom = promiseCreator(2500, 'Ok!');
prom.then(console.log);
