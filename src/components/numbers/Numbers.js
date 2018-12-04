import React from 'react';

const nums = [0, 1, 2, 3, 4, 5, 6, 7];

// const nums = Array(3,5);

const Numbers = (props) =>{
    if (props.odd){
        return <ul>
            {nums.filter(num => num % 2 ).map(num => <li>{num}</li>)}
        </ul>
    }
    if (props.even){
        return <ul>
            {nums.filter(num => num % 2 === 0).map(num => <li>{num}</li>)}
        </ul>
    }else {
        return <ul>
            {nums.map(num => <li>{num}</li>)}
        </ul>
    }
};

export default Numbers;