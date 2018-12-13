import React from 'react';

class Counter extends Component {
    state = {counter: 0}
// constructor(props){
//     super(props);
//     this.counter = 0;
//     this.clickHandler = this.clickHandler.bind(this);
// }

    clickHandler = () => {
        this.setState( { counter: this.state.counter + 1 });

        // this.setState((state, props) => {
        //     console.log(state, props);
        //     return {counter: state.counter + 1}
        // });

    }

    render() {
        const { counter } = this.state;

        return (
            <>
                <button onClick={this.clickHandler}>Increase</button>
                <br />
                <span>{counter}</span>
            </>

        )
    }
}


export default Counter;