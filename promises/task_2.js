//const promiseCreator = (time, text) =>
//    new Promise(function (resolve, reject) {
//        setTimeout(function () {
//            resolve(text);
//        }, time);
//    });
//
//const prom = promiseCreator(2500, 'Ok!');
//prom.then(console.log);

class Prom {
    constructor(promise) {
        this.promise = new Promise((resolve, reject) => {
            resolve(this);
            reject();
        });
    }
    reject() { return this.promise.reject(); }
    resolve() { return this.promise.resolve; }
}
const inst = new Prom();
//inst.promise.then(() => console.log("Success!"));
inst.resolve('test');
//console.log('test');
//→  test


