import React from 'react';

const time = new Date().getHours();
let text = "Good night";

if (time < 22)
    text = "Good evening";

if (time < 18)
    text = "Good afternoon";

if (time < 12)
    text = "Good morning";

if (time < 3 )
    text = "Good night";

const Hello = (props) =>{
    return props.name
        ? <span>{text} {props.name}</span>
        : <span>{text}</span>
};

export default Hello;