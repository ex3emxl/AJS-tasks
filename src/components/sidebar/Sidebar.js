import React from 'react';

import './sidebar.scss';

import Users from "../users/Users";
import Form from "../form/Form";
import Dashboard from "../dashboard/Dashboard";
import Product from "../product/Product";
import { getInfo } from "../../services";

class Sidebar extends Component {

    state = {};

    componentDidMount() {
        fetch('http://localhost:8086/public/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ email: 'admin@a.com', password: 'admin' })
        })
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

                <Users users={ this.users }/>

                <Form onloose={ this.fn }/>
                <br/>
                <Dashboard name={ name }
                           categoryCount={ this.state ? this.state.categories : '' }
                           categoryCountPublished={ this.state ? this.state.publishedCategories : '' }
                           productsCount={ this.state ? this.state.products : '' }/>
                <br/>
                <Product/>
            </div>
        );
    }
}


export default Sidebar;