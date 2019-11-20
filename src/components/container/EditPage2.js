import React, { Component } from 'react';
import Service from '../api/Service';
//import Title from '../common/Title'
import HandleFormEdit from '../common/HandleFormEdit'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EditPage2 extends Component {

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

    handleObjectValue = (object, keyObj) => {
        if (object instanceof Array) {
            return 'array'
        }
        //console.log(object);
        //console.log(keyObj);
        return (
            Object.keys(object).map((key, index) => {
                //console.log(key);
                //console.log(index);
                return (
                    <div key={index} className="form-group row">
                        <label htmlFor={key} className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right"><strong>{key.toUpperCase()}:</strong></label>
                        <div className="col-md-8 col-sm-12">
                            {this.handleValue(object[key], key)}
                        </div>
                    </div>
                )
            })
        )
    }

    handleValue = (data, key) => {
        //console.log(data);
        //console.log(key);
        console.log(data);
        console.log(typeof data);

        if (data instanceof Object) {
            if (data instanceof Array) {
                return data.map((element, index) => {
                    return (
                        <div key={index}>
                            <div>{this.handleObjectValue(element, index)}</div>
                        </div>
                    )
                })
            }
            return <div>{this.handleObjectValue(data, key)}</div>
        } else {
            return <input type={typeof data} name={key} id={key} className="form-control form-control-sm" defaultValue={data} />
        }
    }

    handleData = () => {
        return (
            Object.keys(this.state.data).map((key, index) => {
                if (key !== 'id') {
                    return (
                        <div key={index} className="form-group row">
                            <label htmlFor={key} className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right"><strong>{key.toUpperCase()}:</strong></label>
                            <div className="col-md-8 col-sm-12">
                                {this.handleValue(this.state.data[key], key)}
                            </div>
                        </div>
                    )
                }
                return null
            })
        )
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(
            { data: { ...this.state.data, [name]: value } },
            () => { console.log(this.state.data) }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {

        if (this.state.loadComplete) {
            return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            {/*<Title title={'Edit'} />*/}
                            <div className="card my-3">
                                <div className="card-header bg-dark text-warning">
                                    <div className="d-flex justify-content-around">
                                        <Link to="/">
                                            <button type="button" className="btn btn-info" title="Go back">
                                                <FontAwesomeIcon icon="arrow-left" size="lg" />
                                            </button>
                                        </Link>
                                        <h2 align="center"> Edit this element </h2>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="container">
                                        <div className="form-group col-12 text-center">
                                            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                                                {this.handleData()}
                                                <button onClick={this.edit} className="btn btn-warning mx-2" title="Edit">
                                                    Edit <FontAwesomeIcon icon="save" size="lg" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return null
    }
}

export default EditPage2;