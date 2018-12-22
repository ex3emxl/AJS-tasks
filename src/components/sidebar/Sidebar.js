import React from 'react';

import './sidebar.scss';

import Users from "../users/Users";
import Form from "../form/Form";

const users = [
    {firstName: 'Se', lastName: 'Mi', age: 37},
    {firstName: 'John', lastName: 'Dou', age: 39},
    {firstName: 'Un', lastName: 'Known', age: 99},
];

const fn = text => console.log(text);

const Sidebar = () => (
    <div className='sidebar'>
        <h2>Sidebar</h2>

        <Users users={users} />

        <Form onloose={fn}/>

    </div>
);

export default Sidebar;