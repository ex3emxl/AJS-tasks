import React from 'react';

import Hello from '../hello';
import Numbers from '../numbers';

import './content.scss';


const Error = (props) =>
    <mark style={{color: props.color}}>{props.text}</mark>;

const Content = () => (
    <div className='content'>
        <Hello
            name="Se Mi"
        />

        <Numbers from="5" to="7" even />

        <Error
            text="There is an error"
            color="red"
        />
    </div>
);

export default Content;