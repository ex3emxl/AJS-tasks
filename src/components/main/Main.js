import React from 'react';
import Sidebar from '../sidebar';
import Content from '../content';
import List from '../list';

import './main.scss';

class Main extends Component{
    state = { users: [] };

    constructor(props){
        super(props);
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({users}))
    }

    showUserInfo(user) {
        alert( user.username);
    }

    render() {
        const {title} = this.props;
        const {users} = this.state;

        return ( <main className='main'>
            <h1>{title}</h1>
            <Sidebar />
            <List items={users} handleClick={this.showUserInfo} />
                        <Content />
        </main>);
    }
}


export default Main;