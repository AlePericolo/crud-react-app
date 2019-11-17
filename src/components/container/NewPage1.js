import React, { Component } from 'react';
import Service from '../api/Service';
//import Title from '../common/Title'
import HandleFormNew1 from '../common/HandleFormNew1'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NewPage1 extends Component {

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
            data:
            {
                manufacturer: '',
                model: '',
                price: '',
                quality: [{ name: '', rating: '' }],
                wiki: '',
            }
        });
        this.setState({ loadComplete: true })
    }

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
                                        <HandleFormNew1 data={this.state.data} />
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
        } else {
            return '';
        }
    }
}

export default NewPage1;