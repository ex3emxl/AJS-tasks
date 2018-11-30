import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/header';
// import Footer from './components/footer';

const Wrapper = (
    <>
        <Header />
        {/*<Footer />*/}
    </>
);



    ReactDom.render(Wrapper, document.getElementById('app'));
