import React from 'react';

class Clock extends Component {
    state = {
        date: new Date()
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const { date } = this.state;
        return (<div className='date'>
            <p>{date.toLocaleDateString()}</p>
            <p>{date.toLocaleTimeString()}</p>
        </div>);
    }
}

export default Clock;