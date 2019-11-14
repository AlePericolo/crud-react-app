import React from 'react';
import Service from '../Service';
import { Link } from 'react-router-dom';

export default class DeleteButton extends React.Component {

    deleteDocument = () => {

        Service.deleteApi('/' + this.props.id.toString())
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    alert('Car deleted successfully!!');
                    this.props.history.push('/index')
                }
                else {
                    alert('something went wrong!!');
                    this.props.history.push('/index')
                }
            }).catch((error) => {
                console.log("error-----------", error)
            })
    }

    render() {
        return (
            <button type="button" onClick={this.deleteDocument} className="btn btn-danger">Delete</button>
        );
    }

}