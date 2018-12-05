import React from 'react';

import Hello from '../hello';
import Numbers from '../numbers';

import './content.scss';

const Content = () => (
    <div className='content'>
        <Hello
            name="Se Mi"
        />

        <Numbers from={5} to={13} odd />

        <Numbers from={5} to={13} even />

        <Numbers from={5} to={13} />

    </div>
);

export default Content;