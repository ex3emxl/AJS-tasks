import './products.scss';

import { getProductsByCategory } from '../../services';

import { FaTrashAlt, FaBatteryThreeQuarters, FaCheck } from 'react-icons/fa';
import InputSpan from '../../components/form';
import React from 'react';

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

    noResults = 'No Results';

    componentDidMount() {
        getProductsByCategory()
            .then(products => {
                this.setState({ products: products.products });
                // console.log(Object.keys(products.products).length);
                this.setRef(Object.keys(products.products).length)
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
            displayFilter = displayFilter.length ? displayFilter : this.noResults;
            this.setState({ displayFilter: displayFilter })

        } else {
            this.setState({ displayFilter: [] })
        }
        return true
    }

    handleInputSpanChange = (id, e) => {
        let { products } = this.state;
        products = this.state.products.map(product => (
            {
                id: product.id,
                title: product.id === id ? e.target.value : product.title
            }
        ));
        this.setState({ products: products });
    }

    render() {

        const { products, displayFilter } = this.state;
        const productItems = displayFilter.length ? displayFilter : products;

        return (
            <div className='component-products'>
                <label>Filter</label>
                <input onChange={ this.handleInputChange } type="text"/>
                <span>Need type more than 3 symbols</span>
                <div className="products-wrapper">
                    { displayFilter === this.noResults ?
                        <div className='product-list'>{ this.noResults }</div> :
                        productItems && (
                            Object.values(productItems).map((productList, index) => (
                                    <div className="product-wrapper" key={ productList.id }>
                                        <div className="product">
                                            <a className="delete" onClick={ this.deleteTask }><FaTrashAlt/></a>
                                            <a className="edit"
                                               onClick={ () => this.simulateClick(index) }><FaBatteryThreeQuarters/></a>
                                            <div className="product-icon"><FaCheck/></div>
                                        </div>
                                        <InputSpan ref={ this.insideRefs[index] }
                                                   onloose={ (arg = true) => arg }
                                                   onchange={ (e) => this.handleInputSpanChange(productList.id, e) }
                                                   value={ productList.title.toLowerCase() }
                                        />
                                    </div>
                                )
                            )
                        )
                    }
                </div>
                <span>Добавить новый</span>
            </div>
        );
    }
}

export default Products;