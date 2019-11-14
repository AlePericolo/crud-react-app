import React from 'react';
import Service from '../Service';
import Swal from "sweetalert2"
import { Redirect } from 'react-router-dom';



export default class DeleteButton extends React.Component {

    deleteDocument = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                Service.deleteApi('/' + this.props.id.toString())
                    .then(response => {
                        console.log(response);
                        if (response.status === 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Element deleted',
                                showConfirmButton: false,
                                timer: 1500
                            }).then(() => {
                                return <Redirect to='/' />
                                console.log('suka');
                            });
                            //this.props.history.push('/index')
                        }
                        else {
                            alert('something went wrong!!');
                            this.props.history.push('/index')
                        }
                    }).catch((error) => {
                        console.log("error-----------", error)
                    })
            }
        })
    }

    render() {
        return (
            <button type="button" onClick={this.deleteDocument} className="btn btn-danger">Delete</button>
        );
    }

}