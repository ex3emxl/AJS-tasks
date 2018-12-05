import React from 'react';

const Numbers = (props) =>{
    let start = props.from;
    let end = props.to;
    const nums = Array(end-start+1)
        .fill()
        .map(() => start++);

    if (props.odd){
        return <ul>
            {nums.filter(num => num % 2 ).map((num, index) => <li key={index}>{num}</li>)}
        </ul>
    }
    if (props.even){
        return <ul>
            {nums.filter(num => num % 2 === 0).map((num, index) => <li key={index}>{num}</li>)}
        </ul>
    }else {
        return <ul>
            {nums.map(num => <li>{num}</li>)}
        </ul>
    }
};

export default Numbers;