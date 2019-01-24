import React from 'react';
import Sidebar from '../sidebar';
import Content from '../content';
import { checkUser, getInfo } from "../../services";
// import List from '../list';

import './main.scss';

// import { checkUser } from "../../../../bufer21/src/services";

class Main extends Component {
    state = {
        user: null,
        info: null,
        loading: true
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('componentDidMount');
        checkUser()
            .then(data => this.setState({ user: data, loading: false }))
            .catch(() => this.setState({ loading: false }))

    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.user && this.state.user) {
            console.log('componentDidUpdate');
            getInfo()
                .then((info) => this.setState({ info }));
        }
    }

    onLogin = (user) => {
        console.log('onLogin');
        this.setState({
            user
        });
    };

    render() {
        console.log('render');
        const { title } = this.props;
        const { user, info, loading } = this.state;

        return (<main className='main'>
            <h1 className="main-header">{ title }</h1>
            <div className="main-inside">
                <div className="left-row">
                    <Sidebar/>
                </div>
                <div className="right-row">
                    <Content
                        user={ user }
                        info={ info }
                        loading={ loading }
                        onLogin={ this.onLogin }
                    />
                </div>
            </div>
        </main>);
    }
}


export default Main;