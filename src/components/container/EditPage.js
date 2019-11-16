import React, { Component } from 'react';
import Service from '../api/Service';
import Title from '../common/Title'
import HandleFormObject from '../common/HandleFormObject'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EditPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            data: '',
            loadComplete: false
        };
        this.addService = new Service();
    }

    componentDidMount() {

        Service.getApi(`/${this.state.id}`)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ data: response.data });
                    this.setState({ loadComplete: true })
                }
            })
            .catch(function (error) {
                Swal.fire(error.toString())
                console.log(error);
            });
    }

    edit = () => {

        console.log(this.state.data);

        /*
        Service.deleteApi(`/${this.state.id}`)
            .then(response => {
                //console.log(response);
                if (response.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Element deleted',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        this.props.history.push('/');
                    });
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Something went wrong',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        this.props.history.push('/');
                    });
                }
            }).catch((error) => {
                console.log("error-----------", error)
            });
        */
    }

    render() {

        if (this.state.loadComplete) {
            return (
                <div className="container-fluid" >
                    <Title title={'Edit'} />
                    <div className="card">
                        <div className="card-body">
                            <HandleFormObject data={this.state.data} />
                        </div>
                        <div className="card-footer text-center">
                            <Link to="/">
                                <button type="button" className="btn btn-info mx-2" title="Go back">
                                    <FontAwesomeIcon icon="arrow-left" size="lg" />
                                </button>
                            </Link>
                            <button type="submit" className="btn btn-success mx-2" title="Save">
                                <FontAwesomeIcon icon="save" size="lg" />
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return '';
        }
    }
}

export default EditPage;