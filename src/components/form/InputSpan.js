import React from 'react';

class InputSpan extends Component {

    state = {
        hidden: false
    };

    handleInputBlur = (e) => {
        if (this.props.onloose(e)) {
            this.setState({
                hidden: e.target.value
            });
        }
    };

    handleInputChange = e => this.props.onchange(e);

    handleSpanBlur = () => this.setState({ hidden: false });

    render() {

        const { hidden } = this.state;
        const html = !hidden ?
            <>
                <input onBlur={ this.handleInputBlur }
                       onChange={ this.handleInputChange }
                       name={ this.props.name }
                       value={ this.props.value }
                       type="text"
                />
                { this.props.error && <p><mark>{ this.props.error }</mark></p> }
            </> :
            <span id={ this.props.name } onClick={ this.handleSpanBlur }> { this.state.hidden } </span>;

        return (
            <div className="input-text">
                { html }
            </div>
        );
    }
}

export default InputSpan;