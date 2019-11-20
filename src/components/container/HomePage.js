import React, { Component } from 'react';
import Service from '../api/Service';
import HandleGrid from '../common/HandleGrid';
import Swal from 'sweetalert2'

class HomePage extends Component {

    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            data: null,
            manufacturerList: [],
            loadComplete: false
        };
        this.addService = new Service();
    }

    componentDidMount() {
        Service.getAllApi()
            .then(response => {
                //console.log(response);
                if (response.status === 200) {
                    this.setState(
                        { data: response.data },
                        () => { this.createListManufacturer() }
                    );
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

    createListManufacturer = () => {

        var appManufacturerList = []
        //console.log(this.state.data)
        if (this.state.data instanceof Array && this.state.data.length > 0) {
            this.state.data.forEach((obj) => {
                if (appManufacturerList.indexOf(obj.manufacturer) === -1) {
                    appManufacturerList.push(obj.manufacturer)
                }
            })
            appManufacturerList.push("All")
        }
        //console.log(appManufacturerList);
        this.setState(
            { manufacturerList: appManufacturerList },
            //() => {console.log(this.state)}
        );
    }

    handleChange = (e) => {
        //console.log(e.target.value)
        const filter = e.target.value
        Service.getFiltereApi(filter)
            .then(response => {
                //console.log(response) 
                if (response.status === 200) {
                    this.setState(
                        { data: response.data }
                    );
                }
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

    showFilterSelect() {
        if (this.state.manufacturerList.length > 0) {
            return (
                <div className="conatiner">
                    <div className="row justify-content-center">
                        <div className="col-4 input-group p-0 mt-5 mb-3 boxShadowSmall">
                            <div className="input-group-prepend">
                                <label className="input-group-text bg-dark text-light" htmlFor="inputGroupSelect01">Manufacturer</label>
                            </div>
                            <select name="manufacturerList" defaultValue="All" onChange={this.handleChange} className="custom-select" id="inputGroupSelect01">
                                {this.state.manufacturerList.map((e, key) => {
                                    return <option key={key} value={e}>{e}</option>;
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            )
        }
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
                    {this.showFilterSelect()}
                    {this.createGrid()}
                </div>
            )
        }
        return null;
    }
}

export default HomePage;