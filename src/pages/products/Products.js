import React from 'react';
import { FaTrashAlt, FaBatteryThreeQuarters, FaCheck, FaEdit, FaShoppingBag } from 'react-icons/fa';

import { getAllProducts } from '../../services';
import InputSpan from '../../components/form';
import * as Constants from '../../constants';

import './products.scss';

class Products extends Component {

    state = {
        products: null,
        displayFilter: []
    };

    insideRefs = [];

    setRef = (numberOfRefs) => {
        this.insideRefs = [...Array(numberOfRefs)]
            .map((inputSpan) => inputSpan = React.createRef())
    };

    componentDidMount() {
        getAllProducts()
            .then(products => {
                this.setState({ products });
            })
    }

    deleteTask = () => {
        console.log('deleted')
    }

    simulateClick(index) {
        this.insideRefs[index].current.handleSpanBlur();
    }

    handleInputChange = (e) => {
        if (e.target.value.length > 2) {
            let displayFilter = this.state.products.filter(product => product.title.includes(e.target.value));
            displayFilter = displayFilter.length ? displayFilter : Constants.NO_RESULTS;
            this.setState({ displayFilter });

        } else {
            this.setState({ displayFilter: [] });
        }
        return true
    }

    handleInputSpanChange = (id, index, e) => {
        let { products } = this.state;
        products[index] = {
            id: id,
            title: e.target.value
        }
        this.setState({ products });
    }

    render() {

        const { products, displayFilter } = this.state;
        const productItems = displayFilter.length ? displayFilter : products;
        products && this.setRef(products.length);

        return (
            <div className='component-products'>
                <label>{ Constants.FILTER }</label>
                <input onChange={ this.handleInputChange } type="text"/>
                <span>{ Constants.MORE_SYMBOLS }</span>
                <div className="products-wrapper">
                    { displayFilter === Constants.NO_RESULTS ?
                        <div className='product-list'>
                            { Constants.NO_RESULTS }
                        </div> :
                        productItems && (
                            Object.values(productItems).map((productList, index) => (
                                    <div className="product-wrapper" key={ productList.id }>
                                        <div className="product">
                                            <a className="delete" onClick={ this.deleteTask }><FaTrashAlt/></a>
                                            <a className="edit"
                                               onClick={ () => this.simulateClick(index) }><FaEdit/></a>
                                            <div className="product-icon"><FaShoppingBag/></div>
                                        </div>
                                        <InputSpan ref={ this.insideRefs[index] }
                                                   onloose={ (arg = true) => arg }
                                                   onchange={ (e) => this.handleInputSpanChange(productList.id, index, e) }
                                                   value={ productList.title.toLowerCase() }
                                        />
                                    </div>
                                )
                            )
                        )
                    }
                </div>
                <span className="add-button">Добавить новый</span>
            </div>
        );
    }
}

export default Products;