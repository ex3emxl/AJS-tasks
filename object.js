const getObject = (name='User', age=25) => ({}, {name, age});

const obj = {
    text: `Hello buddy`,
    getLength(){return text.length; },
    reverse(){return text.split("").reverse().join("");}
};
obj.getLength();

const cloneObj = (...list) => Object.assign(...list);    
