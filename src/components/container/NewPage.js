import React, { Component } from 'react';
import Service from '../api/Service';
//import Title from '../common/Title'
import HandleFormNew from '../common/HandleFormNew'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NewPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: '',
            loadComplete: false
        };
        this.addService = new Service();
    }

    componentDidMount() {

        this.setState({
            /*DB.JSON*/
            data:
            {
                manufacturer: '',
                model: '',
                price: 0,
                quality: [],
                wiki: '',
            }
            /*DB_MISMATCH.JSON
            data:
            {
                manufacturer: '',
                model: '',
                price: '',
                quality: {
                    "overall": 0,
                    "mechanical": 0,
                    "powertrain": 0,
                    "body": 0,
                    "interior": 0,
                    "accessories": 0 
                }
            }*/
        });
        this.setState({ loadComplete: true })
    }

    //gestire pulsante cambia struttura

    save = () => {

        console.log(this.state.data);

    }

    render() {

        if (this.state.loadComplete) {
            return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            {/*<Title title={'New'} />*/}
                            <div className="card my-3">
                                <div className="card-header bg-dark text-success">
                                    <div className="d-flex justify-content-around">
                                        <Link to="/">
                                            <button type="button" className="btn btn-info" title="Go back">
                                                <FontAwesomeIcon icon="arrow-left" size="lg" />
                                            </button>
                                        </Link>
                                        <h2 align="center"> Add new element </h2>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="container">
                                        <HandleFormNew data={this.state.data} />
                                        <div className="form-group col-12 text-center">
                                            <button onClick={this.save} className="btn btn-success mx-2" title="Save">
                                                Save <FontAwesomeIcon icon="save" size="lg" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return '';
    }
}

export default NewPage;