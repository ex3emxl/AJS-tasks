import React from 'react';
import './product.scss';

class Product extends Component {

    constructor(props) {

        super(props);

        this.fields = [
            { label: 'title', reg: /^.{3,}$/ },
            { label: 'price', reg: /^[0-9]+$/ },
            { label: 'description', reg: /^.{3,}$/ },
        ];

        this.state = {};

        this.fields.forEach(({ label }) => this.state[label] = ({
            value: '',
            error: false,
            display: false,
        }));
    }

    validate = ({ target }) => {
        const field = this.fields.find(item => item.label === target.name);
        const stateField = this.state[target.name];

        !field.reg.test(target.value) ?
            this.setState({
                [target.name]: {
                    ...stateField,
                    error: target.name === 'price' ? "Should be only digits" : "Is not valid"
                }
            }) :
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
        return Object.entries(this.state).some(([key, { error, value }]) => error || !value);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = {};
        Object.entries(this.state).forEach(([key, { value }]) => data[key] = value);

    };

    // TODO: need autofocus

    render() {

        const { title, price, description } = this.state;

        const htmlTitle = !title.display ?

            <h3>TITLE: <input name="title"
                              onChange={ this.handleInputChange }
                              onBlur={ this.validate }
                              type="text"
                              value={ title.value }/>
                <p>{ title.error && <mark>{ title.error }</mark> }</p>
            </h3> :

            <h3>TITLE: <span id="title"
                             onClick={ this.handleSpanBlur }> { this.state.title.value } </span>
            </h3>;

        const htmlPrice = !price.display ?

            <>
                <b>$<input name="price"
                           onChange={ this.handleInputChange }
                           onBlur={ this.validate }
                           type="text"
                           value={ price.value }/>
                </b>
                <p>{ price.error && <mark>{ price.error }</mark> }</p>
            </> :

            <b>$
                <span id="price" onClick={ this.handleSpanBlur }>
                    { this.state.price.value }
                    </span>
            </b>;

        const htmlDescription = !description.display ?

            <>
                <textarea name="description"
                          type="textarea"
                          placeholder="Description"
                          rows="5"
                          onChange={ this.handleInputChange }
                          onBlur={ this.validate }
                          value={ description.value }/>
                { description.error && <mark>{ description.error }</mark> }
            </> :

            <span id="description" onClick={ this.handleSpanBlur }>
                { this.state.description.value }
            </span>;


        return (
            <form className="product" onSubmit={ this.onSubmit }>
                <div>{ htmlTitle }</div>
                <div>{ htmlPrice }</div>
                <div>{ htmlDescription }</div>
                <input type="submit" value="save" disabled={ this.getButtonState() }/>
            </form>
        );
    }
}

export default Product;