import React from 'react';
import Sidebar from '../sidebar';
import Content from '../content';
import List from '../list';

import './main.scss';

class Main extends Component {
    state = {
        users: [],
        posts: []
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({users}))
    }

    showUserInfo = user => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
            .then(response => response.json())
            .then(posts => {
                return this.setState({posts})
            })
    }

    render() {
        const {title} = this.props;
        const {users, posts} = this.state;

        return (<main className='main'>
            <h1 className="main-header">{title}</h1>
            <div className="main-inside">
                <div className="left-row">
                    <Sidebar/>
                </div>
                <div className="right-row">
                    <Content/>
                    <div className="users">
                        <List items={users} handleClick={this.showUserInfo}/>
                    </div>
                    <div className="posts">
                        <h2>Posts</h2>
                        <List items={posts}/>
                    </div>
                </div>
            </div>
        </main>);
    }
}


export default Main;