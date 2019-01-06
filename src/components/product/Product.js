import React from 'react';

class Product extends Component {

    constructor(props) {

        super(props);

        this.fields = [
            { label: 'title', reg: /^[^ ]{3,20}$/ },
            { label: 'price', reg: /^[0-9]+$/ },
            { label: 'description', reg: /^[^ ]{3,20}$/ },
        ];

        this.state = {};

        this.fields.forEach(({label}) => this.state[label] = ({
            value: '',
            error: false,
            display: false,
        }));
    }

    validate = ({target}) => {
        const field = this.fields.find(item => item.label === target.name);
        const stateField = this.state[target.name];

        !target.value.length || !field.reg.test(target.value) ?
            this.setState({ [target.name]: {
                ...stateField,
                    error: target.name === 'price' ? "Should be only digits" : "Is not valid"
            } }) :
            this.setState({ [target.name]: { ...stateField, error: false, display: true } });
    }

    handleInputChange = e => {
        const field = this.state[e.target.name];
        this.setState({ [e.target.name]: { ...field, value: e.target.value } });
    }

    handleSpanBlur = e => {
        const field = this.state[e.target.id];
            this.setState({ [e.target.id]: { ...field, display: false } });
    }

    getButtonState() {
        return Object.entries(this.state).some(([key, {error, value}]) => error || !value);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = {} ;
        Object.entries(this.state).forEach(([key, {value}]) => data[key] = value);

    };

    render() {

        const { title, price, description } = this.state;

        const htmlTitle = !title.display ?

            <><h3>TITLE: <input name="title"
                              onChange={ this.handleInputChange }
                              onBlur= { this.validate }
                              type="text"
                              value={ title.value }/>
            </h3>
            {title.error && <mark>{title.error}</mark>}
            </>:

            <h3>TITLE: <span id="title"
                             onClick= { this.handleSpanBlur }> { this.state.title.value } </span>
            </h3>;

        const htmlPrice = !price.display ?

            <>
                <h3>$<input name="price"
                              onChange={ this.handleInputChange }
                              onBlur= { this.validate }
                              type="text"
                              value={ price.value }/>
            </h3>
                {price.error && <mark>{price.error}</mark>}
            </> :

            <h3>$<span id="price"
                             onClick= { this.handleSpanBlur }>{ this.state.price.value } </span>
            </h3>;

        const htmlDescription = !description.display ?
            <>
                <textarea name="description"
                      onChange={ this.handleInputChange }
                      onBlur= { this.validate }
                      type="textarea"
                      placeholder="Description"
                      value={ description.value }/>
                {description.error && <mark>{description.error}</mark>}
            </> :
            <span id="description"
                  onClick= { this.handleSpanBlur }> { this.state.description.value } </span>;


        return (
            <form className="product" onSubmit={ this.onSubmit }>
                { htmlTitle }
                { htmlPrice }
                { htmlDescription }
                <input type="submit" value="save"  disabled={this.getButtonState()}/>
            </form>

        );
    }
}

export default Product;