import React, { Component } from 'react';
import Service from '../Service';
import Grid from '../Grid';
import Title from '../common/Title'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

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
                if (response.data.length > 0) {
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
        if (this.state.data instanceof Array) {
            return <Grid data={this.state.data} />
        }
    }

    render() {
        if(this.state.loadComplete){
        return (
            <div className="container-fluid">
                <Title title={'Cars'} />
                <div className="container-fluid">
                    <div className="clearfix mb-2">
                        <Link to={"/form/"} >
                            <button type="button" className="btn btn-success float-right">Add</button>
                        </Link>
                    </div>
                </div>
                {this.createGrid()}
            </div>
        )}
        return '';
    }
}

export default HomePage;