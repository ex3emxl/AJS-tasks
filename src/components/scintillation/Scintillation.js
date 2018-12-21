import React from 'react';

import Mount from '../mount';

import './scintillation.scss';

class Scintillation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            show: true
        };
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
                {show && <Mount code={counter} />}
            </div>
        );
    }
}

export default Scintillation;