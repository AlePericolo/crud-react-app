import React, { Component } from 'react';
import Service from '../Service';
import Table from '../Table';
import Grid from '../Grid';
import Title from '../common/Title'
import { Link } from 'react-router-dom';

class HomePage extends Component {

    constructor(props) {
        super(props);
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

    createTable() {
        if (this.state.data instanceof Array) {
            return <Table data={this.state.data} />
        }
    }

    render() {
        return (
            <div className="container-fluid">
                {this.createGrid()}
            </div>
        );
    }
}

export default HomePage;