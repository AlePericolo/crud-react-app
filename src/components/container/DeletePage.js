import React from 'react';
import Service from '../api/Service';
//import Title from '../common/Title'
import HandleObject from '../common/HandleObject'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DeletePage extends React.Component {

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

    delete = () => {

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
    }

    render() {

        if (this.state.loadComplete) {
            return (
                <div className="container" >
                    <div className="row justify-content-center">
                        <div className="col-10">
                            {/*<Title title={'Delete'} />*/}
                            <div className="card my-3">
                                <div className="card-header bg-dark text-danger text-center">
                                    <h2> Delete this element ? </h2>
                                </div>
                                <div className="card-body">
                                    <div className="container">
                                        <HandleObject data={this.state.data} />
                                    </div>
                                </div>
                                <div className="card-footer bg-dark text-center">
                                    <Link to="/">
                                        <button type="button" className="btn btn-info mx-2" title="Go back">
                                            <FontAwesomeIcon icon="arrow-left" />
                                        </button>
                                    </Link>
                                    <button type="button" onClick={this.delete} className="btn btn-danger mx-2" title="Delete">
                                        <FontAwesomeIcon icon="trash-alt" />
                                    </button>
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

export default DeletePage;