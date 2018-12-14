import React from 'react';

class Button extends Component {
    state = {clName: ''}

    clickHandler = () => {
        this.setState(({clName}) => {
            return {clName: clName ? '' : 'active'}
        });
    }

    render() {
        return (
            <>
                <button onClick={this.clickHandler} className={this.state.clName}>Button</button>
            </>
        )
    }
}

export default Button;