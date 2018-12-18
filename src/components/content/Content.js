import React from 'react';

import Hello from '../hello';
import Counter from '../counter';
import Numbers from '../numbers';
import Button from '../button';
import Show from '../show';

import './content.scss';


const Error = (props) =>
    <mark style={{color: props.color}}>{props.text}</mark>;

const Content = () => (
    <div className='content'>
        <Hello
            name="Se Mi"
        />
        <br/>

        <Counter/>
        <br/>
        <Numbers from=1 to=7 even/>

        <Error
            text="There is an error"
            color="red"
        />
        <br/>
        <Button/>
        <br/>
        <Show />
    </div>
);

export default Content;