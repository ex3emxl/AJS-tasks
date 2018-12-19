import React from 'react';

import Mount from '../mount';

import './scintillation.scss';

class Scintillation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            show: true,
            color: 'grey'
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.counter !== prevState.counter){
            this.setState({color: '#grey'});
        }
        if (
            this.state.counter !== prevState.counter &&
            this.state.counter % 3 === 0
        ) {
            this.setState({color: 'green'});
        }
        if (
            this.state.counter !== prevState.counter &&
            this.state.counter % 5 === 0
        ) {
            this.setState({color: 'blue'});
        }
        if (
            this.state.counter !== prevState.counter &&
            this.state.counter % 3 === 0 &&
            this.state.counter % 5 === 0
        ) {
            this.setState({color: 'light-blue'});
        }
    }

    render() {
        const {counter, show} = this.state;

        return (
            <div>
                <button onClick={() => this.setState({counter: counter + 1})}>Inc</button>
                <span className="count-text">{this.state.counter}</span>
                <br/><br/>
                <button onClick={() => this.setState({show: !show})}>
                    {show ? 'Destroy' : 'Create'}
                </button>
                {show && <Mount code={counter} color={this.state.color}/>}
            </div>
        );
    }
}

export default Scintillation;