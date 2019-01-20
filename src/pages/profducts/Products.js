import './tasklist.scss';

import { getProductsByCategory, login } from '../../services';

import { FaTrashAlt, FaBatteryThreeQuarters, FaCheck } from 'react-icons/fa';

class Products extends Component {

    state = {
        products: null,
        displayFilter: []
    };

    noResults = 'No Results';

    componentDidMount() {
        login({ email: 'admin@a.com', password: 'admin' });
        getProductsByCategory()
            .then(products => {
                // console.log(tasks.products);
                this.setState({ products: products.products });
            });
    }

    deleteTask = () => {
        console.log('deleted')
    }
    inProgress = () => {
        console.log('in progress')
    }
    completeTask = (key, e) => {
        const userTasks = this.state.products.map(
            (tasks) => {
                tasks.map((el) => {
                        if (!el.done) {
                            el.id === key ? el.done = true : '';
                        } else if (el.done) {
                            el.id === key ? el.done = false : '';
                        }
                        return el
                    }
                )
                return tasks
            }
        );
        this.setState({ products: userTasks });
        e.preventDefault();
    }

    handleInputChange = (e) => {
        // console.log(this.state.products);
        if (e.target.value.length > 2) {
            let displayFilter = this.state.products.filter(product => product.title.includes(e.target.value));
            displayFilter = displayFilter.length ? displayFilter : this.noResults;
            console.log(displayFilter);
            this.setState({ displayFilter: displayFilter })

        } else {
            this.setState({ displayFilter: [] })
        }
        return true
    }

    render() {

        let { products, displayFilter } = this.state;
        const productItems = displayFilter.length ? displayFilter : products;

        return (
                <div className='productlist'>
                    <label>Filter</label>
                    <input onChange={ this.handleInputChange } type="text"/>
                    { displayFilter === this.noResults ?
                        <div className='productlist'>{ this.noResults }</div> :
                        productItems && (
                            Object.values(productItems).map((productList) => (
                                    <div className="product" key={ productList.id }>
                                        { productList.title }
                                    </div>
                                )
                            )
                        )
                    }
                    <span>Добавить новый</span>
                </div>
        );
    }
}

export default Products;