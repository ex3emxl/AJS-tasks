import React from 'react';
import Sidebar from '../sidebar';
import Content from '../content';

import './main.scss';

const Main = () => (
    <main className='main'>
        <Sidebar />
        <Content />
    </main>
);

export default Main;