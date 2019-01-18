import './tasklist.scss';

import { getProductsByCategory, login } from '../../services';

import { FaTrashAlt, FaBatteryThreeQuarters, FaCheck } from 'react-icons/fa';

class Products extends Component {

    state = {
        tasks: null
    };

    days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    today = new Date().getDay();

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

    render() {

        const { products } = this.state;
        // console.log(products);

        return (
            <div>
                    {
                        products && (
                            products.map((productList, index) => (
                                <ol className='productlist'>
                                    {
                                        console.log(productList)
                                        // productList.map(el => (
                                        //     <li className="product" key={ el.id }>
                                        //         { el.title }
                                        //     </li>
                                        // ))
                                    }
                                </ol>
                                // <span>Добавить новый</span>
                            ))
                        )

                    }
            </div>
        );
    }
}

export default Products;