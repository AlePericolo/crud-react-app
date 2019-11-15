import React, { Component } from 'react';
import Service from '../Service';
import Grid from '../Grid';
import Title from '../common/Title'
import { Link } from 'react-router-dom';

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
                    this.setState({ loadComplete: true })
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    createGrid() {
        if (this.state.data instanceof Array && this.state.loadComplete) {
            return <Grid data={this.state.data} />
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <Title title={'Cars'} />
                <div className="container-fluid">
                    <div className="clearfix mb-2">
                        <Link to={"/add/"} >
                            <button type="button" className="btn btn-success float-right">Add</button>
                        </Link>
                    </div>
                </div>
                {this.createGrid()}
            </div>
        );
    }
}

export default HomePage;