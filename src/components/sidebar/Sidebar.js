import React from 'react';

import './sidebar.scss';

import Users from "../users/Users";
import InputSpan from "../form/InputSpan";
import Dashboard from "../dashboard/Dashboard";
import Product from "../product/Product";
import { getInfo } from "../../services";

class Sidebar extends Component {

    state = {};

    componentDidMount() {
        getInfo()
            .then(info => this.setState(info))
    }

    users = [
        { firstName: 'Se', lastName: 'Mi', age: 37 },
        { firstName: 'John', lastName: 'Dou', age: 39 },
        { firstName: 'Un', lastName: 'Known', age: 99 },
    ];

    fn = text => console.log(text);

    render() {

        return (
            <div className='sidebar'>
                <h2>Sidebar</h2>
                <br/>
                <Dashboard name={ name }
                           categoryCount={ this.state.categories }
                           categoryCountPublished={ this.state.publishedCategories }
                           productsCount={ this.state.products }/>
                <br/>
                <Product/>
            </div>
        );
    }
}


export default Sidebar;