import React, { Component } from 'react';
import Service from '../api/Service';
//import Title from '../common/Title'
import HandleGrid from '../common/HandleGrid';
import Swal from 'sweetalert2'

class HomePage extends Component {

    constructor(props) {
        super(props);
        //console.log(props);
        this.state = { data: '', loadComplete: false };
        this.addService = new Service();
    }

    componentDidMount() {
        Service.getAllApi()
            .then(response => {
                //console.log(response);
                if (response.status === 200) {
                    this.setState({ data: response.data });
                }
                this.setState({ loadComplete: true })
            })
            .catch(function (error) {
                console.log(error);
                Swal.fire(error.toString())
                    .then(() => {
                        window.location.reload();
                        console.log('Reload')
                    });
            })
    }

    createGrid() {
        if (this.state.data instanceof Array && this.state.data.length > 0) {
            return <HandleGrid data={this.state.data} />
        } else {
            Swal.fire({
                title: 'No more cars',
                text: "Nedd to add new..",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Add'
            }).then((result) => {
                if (result.value) {
                    this.props.history.push('/new');
                }
            })
        }
    }

    render() {

        if (this.state.loadComplete) {
            return (
                <div className="container-fluid">
                    {/*<Title title={'Cars'} />*/}
                    {this.createGrid()}
                </div>
            )
        }
        return '';
    }
}

export default HomePage;