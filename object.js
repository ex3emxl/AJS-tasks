const getObject = (name='User', age=25) => Object.assign({}, {name, age});

const obj = {    
    getLength(){return `Hello buddy`.length },
    reverse(){return `Hello`.split("").reverse().join("")}
};
obj.getLength();
