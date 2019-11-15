import React, { Component } from 'react';
import Service from '../Service';
import Grid from '../Grid';
import Title from '../common/Title'
import Swal from 'sweetalert2'

import Test from '../Test';

class HomePage extends Component {

    constructor(props) {
        super(props);
        //console.log(props);
        this.state = { data: '', loadComplete: false };
        this.addService = new Service();
    }

    componentDidMount() {
        Service.getApi('')
            .then(response => {
                //console.log(response);
                if (response.status === 200) {
                    this.setState({ data: response.data });
                }
                this.setState({ loadComplete: true })
            })
            .catch(function (error) {
                Swal.fire(error.toString())
                console.log(error);
            })
    }

    createGrid() {
        if (this.state.data instanceof Array && this.state.data.length > 0) {
            //return <Grid data={this.state.data} />
            return <Test data={this.state.data} />
        }else{
            return (
                <div>
                    <div className="alert alert-danger" role="alert">
                        <h2>No more cars</h2>
                        <hr></hr>
                        <p className="mb-0">You nedd to add new..</p>
                    </div>
                </div>
            )
        }
    }

    render() {

        if(this.state.loadComplete){
            return (
                <div className="container-fluid">
                    <Title title={'Cars'} />
                    {this.createGrid()}
                </div>
            )
        }
        return '';
    }
}

export default HomePage;