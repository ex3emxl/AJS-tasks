import React from 'react';

import Hello from '../hello';
import Date from '../clock';
import Products from '../../pages/products';
import Login from '../../pages/login';

import './content.scss';

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