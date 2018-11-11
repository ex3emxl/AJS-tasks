//Переделать функцию с использованием функции-стрелки 
//(в методе reduce тоже использовать arrow function):

function sum(...params) {
    return (!params.length) ? 0 : params.reduce((prev, next) => prev + next);
}


//Исправить функцию так, чтобы вместо undefined в массиве выводилось
// значение поля prefix:

const utils = {
    numbers: [1, 2, 3, 4],
    prefix: 'number',
    getOdd: function () {
        return this.numbers.map(number => `${this.prefix} - ${number}`)
    }
};

//Переделать функции в стрелочные функции, использовать,
//где возможно, короткий синтаксис:

function getDate() { return new Date(); }

getDate = () => new Date();


function getDay() {
  const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  return days[new Date().getDay()];
}

getDay = () => {
  const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  return days[new Date().getDay()];
};


function getListCopy(list) { return list.slice(); }

getListCopy = (...list) => list.slice();
