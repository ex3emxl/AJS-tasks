import React from 'react';

import './sidebar.scss';

import Users from "../users/Users";

const users = [
    {firstName: 'Se', lastName: 'Mi', age: 37},
    {firstName: 'John', lastName: 'Dou', age: 39},
    {firstName: 'Un', lastName: 'Known', age: 99},
];

const Sidebar = () => (
    <div className='sidebar'>
        <h2>Sidebar</h2>

        <Users users={users} />

    </div>
);

export default Sidebar;