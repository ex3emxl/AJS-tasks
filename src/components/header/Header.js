import React from 'react';

import Navigation from '../navigation';

import './header.scss';

const Header = () => (
    <header className='header'>
        <Navigation list={['Products', 'Products', 'Contacts']} />
    </header>
);

export default Header;