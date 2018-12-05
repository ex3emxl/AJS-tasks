import React from 'react';
import Sidebar from '../sidebar';
import Content from '../content';

import './main.scss';

class Main extends Component{
    state = { users: [] };

    constructor(props){
        super(props);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({users}))
    }

    showUserName(username) {
        console.log( username);
    }

    render() {
        const {title} = this.props;
        const {users} = this.state;

        return ( <main className='main'>
            <h1>{title}</h1>
            <Sidebar />
            <ul>
            {users.map(({name, id, username}) => <li key={id} onClick={() => this.showUserName(username)}>{name}</li>)}
            </ul>
            <Content />
        </main>);
    }
}



// const Main = () => (
    {/*<main className='main'>*/}
        {/*<Sidebar />*/}

        {/*<Content />*/}
    {/*</main>*/}
// );

export default Main;