import React, { Component } from 'react';
import Service from '../Service';
import Title from '../common/Title'
import Swal from 'sweetalert2'

class DeletePage extends Component {

    constructor(props) {
        super(props);
    
        this.state = { data: '', loadComplete: false };
        this.addService = new Service();
    }

    componentDidMount() {
        const { params } = this.props.match
        const p = `/${params.id}`;
        console.log(p);
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
            })
    }


    render() {

        return (
            <div className="container-fluid">
                <Title title={'Delete'} />
                <h2>aaa</h2>
            </div>
        )
      }
}

export default DeletePage;