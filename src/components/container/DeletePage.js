import React, { Component } from 'react';
import Service from '../Service';
import Title from '../common/Title'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

class DeletePage extends Component {

    constructor(props) {
        super(props);
    
        this.state = { data: '', loadComplete: false };
        this.addService = new Service();
    }

    componentDidMount() {
        
        const { params } = this.props.match
        const p = `/${params.id}`;
        
        Service.getApi(p)
            .then(response => {
                console.log(response);
                if (response.data.length > 0) {
                    this.setState({ data: response.data });
                }
                this.setState({ loadComplete: true })
            })
            .catch(function (error) {
                Swal.fire(error.toString())
                console.log(error);
            });
    }

    delete = () => {

        const { params } = this.props.match
        const p = `/${params.id}`;

        Service.deleteApi(p)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Element deleted',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        this.props.history.push('/');
                    });
                }
                else {
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

        return (
            <div className="container-fluid">
                <Title title={'Delete'} />
                <div className="card">
                    <div className="card-header">
                        <h2>Delete this element?</h2>
                    </div>
                    <div className="card-body">Content</div> 
                    <div className="card-footer text-center">
                        <Link to="/">
                            <button type="button" className="btn btn-info mx-2">Go Back</button>
                        </Link>   
                        <button type="button" onClick={this.delete} className="btn btn-danger mx-2">Delete</button>
                    </div>
                </div>
            </div>
        )
      }
}


export default DeletePage;