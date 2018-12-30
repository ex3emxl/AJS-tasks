import React from 'react';

class Dashboard extends Component {

    render() {

        return (
            <div className="dashboard">
                <span>Hello, <b>{ this.props.name }</b></span>
                <br />
                <span>You have <b>{ this.props.categoryCount }</b> categories (<b>{ this.props.categoryCountPublished }</b> published)</span>
                <br />
                <span>You have <b>{ this.props.productsCount }</b> products</span>
            </div>
        );
    }
}

export default Dashboard;