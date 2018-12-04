import React from 'react';

const time = new Date().getHours();
let text = "Good night";
if (time > 3) {
    if (time < 12) {
        text = "Good morning";
    } else {
        if (time < 18) {
            text = "Good afternoon";
        } else {
            if (time < 22) {
                text = "Good evening";
            }
        }
    }
}

const Hello = (props) =>{
    return props.name
        ? <span>{text} {props.name}</span>
        : <span>{text}</span>
};

export default Hello;