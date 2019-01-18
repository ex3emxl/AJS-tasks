import React from 'react';

import Hello from '../hello';
import Date from '../clock';
import Products from '../../pages/profducts'

import './content.scss';


const Error = (props) =>
    <mark style={{color: props.color}}>{props.text}</mark>;

const Content = () => (
    <div className='content'>
        <Hello
            name="Se Mi"
        />
        <br/>
        <Date />
        <Products />
    </div>
);

export default Content;