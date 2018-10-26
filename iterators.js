/* 
 Превратить объект в итерируемую коллекцию:
 const  names = { 0: 'Vasya', 1: 'Petya', 2: 'Kolya' };
 Для этого вычислить свойство length (вручную количество ключей не считать)
 и добавить Symbol.iterator. 
 */

const  names = {0: 'Vasya', 1: 'Petya', 2: 'Kolya'};

names[Symbol.iterator] = function () {
    let index = 0;
    const lenght = Object.keys(this).length;
    return {
        next: () => {
            return {
                value: this[index++],
                done: index > this.lenght
            };
        }
    };
};

//Дан объект const obj = { zone: true, word: 'test', skill: 'JS', name: 'John' }.
//Вывести значения ключей в алфавитном порядке (сортировка по ключам):
// name, skill, word, zone. Сортировка должна выполняться автоматически.
//
//for (let l of obj) { console.log(l); } ⇒  //  "John" " JS" "test" true

const obj = {zone: true, word: 'test', skill: 'JS', name: 'John'}

obj[Symbol.iterator] = function () {
    let index = 0;
    const sortedKeys = Object.keys(this).sort();
    return {
        next: () => {
            return {
                value: this[sortedKeys[index++]],
                done: index > Object.keys(this).length
            };
        }
    };
};

//Создать такой итерируемый объект, который выводит в цикле все составные
// текущей даты (год, месяц, день, число, часы, минуты, секунды).
// Никаких посторонних свойств, кроме итератора, в объекте быть не должно.
// Цикл состоит из семи итераций.
//Пример:
//
//const date = { [Symbol.iterator]: function () { ... } };

const date = {
    [Symbol.iterator] () {
        const methods = ['getFullYear', 'getMonth', 'getDay', 'getHours', 'getMinutes', 'getSeconds'];
        let index = 0;
        const date = new Date();

        return {
            next() {
                return {                    
                    value: typeof methods[index] !== "undefined" ? `${methods[index].replace('get', '')} is ${date[ methods[index++] ]()}` : index++,
                    done: index > methods.length
                };
            }
        };
    }
};

