import React from 'react';

import SingleUser from "../single-user/SingleUser";

const Users = (props) =>{
    const users = props.users;
    return <ul className="Users">
            {users.map((users, index) => <li key={index}><SingleUser firstName={users.firstName} lastName={users.lastName} age={users.age} /></li>)}
    </ul>
};

export default Users;