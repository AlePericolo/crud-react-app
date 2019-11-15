import React, { Component } from 'react';
import Service from '../Service';
import Grid from '../Grid';
import Title from '../common/Title'
import { Link } from 'react-router-dom';

class HomePage extends Component {

    constructor(props) {
        super(props);
        //console.log(props);
        this.state = { data: '' };
        this.addService = new Service();
    }

    componentDidMount() {
        Service.getApi('')
            .then(response => {
                //console.log(response);
                this.setState({ data: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    createGrid() {
        if (this.state.data instanceof Array) {
            return <Grid data={this.state.data} />
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <Title title={'Cars'} />
                <Link to={"/add/"} >Add New Car</Link>
                {this.createGrid()}
            </div>
        );
    }
}

export default HomePage;