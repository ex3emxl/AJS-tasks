import React from 'react';

import './mount.scss';

class Mount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'init',
            color: 'grey'
        };

    }

    updateStatus = (e) => {
        this.setState({
            status: this.state.status + '+'
        });

        e.preventDefault();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.code === prevProps.code) return
        this.setState({color: 'grey'});
        if (
            this.props.code % 3 === 0
        ) {
            this.setState({color: 'green'});
        }
        if (
            this.props.code % 5 === 0
        ) {
            this.setState({color: 'blue'});
        }
        if (
            this.props.code % 3 === 0 &&
            this.props.code % 5 === 0
        ) {
            this.setState({color: 'light-blue'});
        }
    }

    render() {

        return (
            <code id="mount" className={this.state.color}>
                <span>
                  The code from props is {this.props.code}<br/>
                  The code from state is {this.state.status}
                </span>
                <a href="" onClick={this.updateStatus}>Update status</a>
            </code>
        );
    }
}

export default Mount;