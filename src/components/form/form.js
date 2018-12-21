import React from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        hidden: false,
        value: ''
    };

    handleInputBlur = (e) => {
        this.setState({
            hidden: true,
        });
        this.props.onloose(e.target.value);
    };

    handleSpanBlur = (e) => {
        this.setState({hidden: false});
    };

    render() {

        const { hidden } = this.state;
        const html = !hidden ?
            <input onBlur= { this.handleInputBlur } type="text"/> :
            <span onClick= { this.handleSpanBlur }> span </span>;

        return (
            <div className="input-form">
                { html }
            </div>
        );
    }
}

export default Form;