import React from 'react';

import './navigation.scss';

const Navigation = (props) => (
    <ul className='nav'>
        {
            props.list.map((el, index) => <li key={index}><a href={'/' + el.toLowerCase()}>{el}</a></li>)
        }
    </ul>
);

export default Navigation;