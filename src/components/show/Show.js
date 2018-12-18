import React from 'react';

import './show.scss';

class Show extends Component {
    state = {
        clName: 'Hide',
        btName: 'Show',
    }

    clickHandler = () => {
        this.setState(({clName, btName}) => {
            return {
                clName: clName !== 'Hide' ? 'Hide' : 'Show',
                btName: btName !== 'Show' ? 'Show' : 'Hide',
            }
        });
    }

    render() {
        return (
            <div className="show-some-text">
                <button onClick={this.clickHandler}>{this.state.btName}</button>
                <div className={this.state.clName.toLowerCase()}>Some text</div>
            </div>
        )
    }
}

export default Show;