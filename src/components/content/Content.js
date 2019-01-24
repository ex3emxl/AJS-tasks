import React from 'react';

import Hello from '../hello';
import Date from '../clock';
import Products from '../../pages/products';
import Login from '../../pages/login';

import './content.scss';
import Home from "../../../../bufer21/src/components/main/Main";


const Error = (props) =>
    <mark style={ { color: props.color } }>{ props.text }</mark>;

const Content = (props) => {
        const { user, onLogin } = props;
        return (
            <div className='content'>
                {
                    user ?
                        <>
                            <Hello name="Se Mi"/>
                            <br/>
                            <Date/>
                            <Products/>
                        </>
                        :
                        <Login onLogin={ onLogin }/>
                }

            </div>
        )
    }
;

export default Content;