import React from 'react';

const Numbers = (props) =>{
    let start = props.from;
    let end = props.to;
    const nums = Array(end-start+1)
        .fill()
        .map(() => start++);
    const li = arr => arr.map((num, index) => <li key={index}>{num}</li>);


    if (props.odd){
        return <ul>
            {li(nums.filter(num => num % 2 ))}
        </ul>
    }
    if (props.even){
        return <ul>
            {li(nums.filter(num => num % 2 === 0))}
        </ul>
    }else {
        return <ul>
            {li(nums)}
        </ul>
    }
};

export default Numbers;