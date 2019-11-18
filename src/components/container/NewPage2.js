import React, { Component } from 'react';
import Service from '../api/Service';
//import Title from '../common/Title'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NewPage2 extends Component {

    constructor(props) {
        super(props);

        this.state = {

            data: {
                manufacturer: '',
                model: '',
                price: 0,
                quality: {
                    'overall': 0,
                    'mechanical': 0,
                    'powertrain': 0,
                    'body': 0,
                    'interior': 0,
                    'accessories': 0
                }
            },
            manufacturerValid: false,
            modelValid: false,
            priceValid: false,
            overallValid: false,
            mechanicalValid: false,
            powertrainValid: false,
            bodyValid: false,
            interiorValid: false,
            accessoriesValid: false,
            formValid: false
        }

        this.addService = new Service();
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        //update inner element
        if (Object.keys(this.state.data.quality).includes(name)) {
            const { quality } = this.state.data
            quality[name] = value
            this.setState(
                {
                    data:
                        { ...this.state.data },
                    quality: { quality }
                },
                () => { this.validateField(name, value) },
                () => console.log(this.state.quality)
            )
        } else {
            this.setState(
                { data: { ...this.state.data, [name]: value } },
                () => { this.validateField(name, value) },
                () => { console.log(this.state.data) }
            )
        }
    }

    validateField(field, value) {

        let handleError = this.state.formErrors;
        let manufacturerValid = this.state.manufacturerValid;
        let modelValid = this.state.modelValid;
        let priceValid = this.state.priceValid;
        let overallValid = this.state.overallValid;
        let mechanicalValid = this.state.mechanicalValid;
        let powertrainValid = this.state.powertrainValid;
        let bodyValid = this.state.bodyValid;
        let interiorValid = this.state.interiorValid;
        let accessoriesValid = this.state.accessoriesValid;

        switch (field) {
            case 'manufacturer':
                manufacturerValid = value.length > 0
                break;
            case 'model':
                modelValid = value.length > 0
                break;
            case 'price':
                priceValid = value > 0
                break;
            case 'overall':
                overallValid = value > 0
                break;
            case 'mechanical':
                mechanicalValid = value > 0
                break;
            case 'powertrain':
                powertrainValid = value > 0
                break;
            case 'body':
                bodyValid = value > 0
                break;
            case 'interior':
                interiorValid = value > 0
                break;
            case 'accessories':
                accessoriesValid = value > 0
                break;
            default:
                break;
        }

        this.setState(
            {
                formErrors: handleError,
                manufacturerValid: manufacturerValid,
                modelValid: modelValid,
                priceValid: priceValid,
                overallValid: overallValid,
                mechanicalValid: mechanicalValid,
                powertrainValid: powertrainValid,
                bodyValid: bodyValid,
                interiorValid: interiorValid,
                accessoriesValid: accessoriesValid,
            },
            this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid:
                this.state.manufacturerValid &&
                this.state.modelValid &&
                this.state.priceValid &&
                this.state.overallValid &&
                this.state.mechanicalValid &&
                this.state.bodyValid &&
                this.state.interiorValid &&
                this.state.accessoriesValid
        });
    }

    errorClass(error) {
        //console.log(error)
        return (error ? '' : ' required-field');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state.data) 
        //console.log(this.props);
        const { data } = this.state;
        //console.log(data);

        Service.postApi(data)
            .then(response => {
                console.log(response);
                if (response.status === 201) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Element successfully add',
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

        let { manufacturer, model, price, quality } = this.state.data

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
                                    <h2 align="center"> Add new element 2 </h2>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="container">
                                    <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                                        <div className="form-group row">
                                            <label htmlFor="manufacturer" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                <strong>MANUFACTURER</strong>
                                            </label>
                                            <div className="col-md-8 col-sm-12">
                                                <input type="text" name="manufacturer" id="manufacturer"
                                                    className={`form-control form-control-sm ${this.errorClass(this.state.manufacturerValid)}`}
                                                    defaultValue={manufacturer} />
                                                <small className="text-danger"> {this.state.manufacturerValid ? '' : 'Insert a manufacturer'} </small>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="model" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                <strong>MODEL</strong>
                                            </label>
                                            <div className="col-md-8 col-sm-12">
                                                <input type="text" name="model" id="model"
                                                    className={`form-control form-control-sm ${this.errorClass(this.state.modelValid)}`}
                                                    defaultValue={model} />
                                                <small className="text-danger"> {this.state.modelValid ? '' : 'Insert a model'} </small>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="price" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                <strong>PRICE</strong>
                                            </label>
                                            <div className="col-md-8 col-sm-12">
                                                <input type="number" name="price" id="price"
                                                    className={`form-control form-control-sm ${this.errorClass(this.state.priceValid)}`}
                                                    defaultValue={price} />
                                                <small className="text-danger"> {this.state.priceValid ? '' : 'Sorry, it can\'t be free...'} </small>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                <strong>QUALITY</strong>
                                            </label>
                                            <div className="col border border-light p-3 my-2">
                                                <div className="form-group row">
                                                    <label htmlFor="overall" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                        <strong>OVERALL</strong>
                                                    </label>
                                                    <div className="col-md-8 col-sm-12">
                                                        <input type="number" min="0" name="overall" id="overall"
                                                            className={`form-control form-control-sm ${this.errorClass(this.state.overallValid)}`}
                                                            defaultValue={quality.overall} />
                                                        <small className="text-danger"> {this.state.overallValid ? '' : 'Min value 1...'} </small>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="mechanical" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                        <strong>MECHANICAL</strong>
                                                    </label>
                                                    <div className="col-md-8 col-sm-12">
                                                        <input type="number" name="mechanical" id="mechanical"
                                                            className={`form-control form-control-sm ${this.errorClass(this.state.mechanicalValid)}`}
                                                            defaultValue={quality.mechanical} />
                                                        <small className="text-danger"> {this.state.mechanicalValid ? '' : 'Min value 1...'} </small>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="powertrain" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                        <strong>POWERTRAIN</strong>
                                                    </label>
                                                    <div className="col-md-8 col-sm-12">
                                                        <input type="number" name="powertrain" id="powertrain"
                                                            className={`form-control form-control-sm ${this.errorClass(this.state.powertrainValid)}`}
                                                            defaultValue={quality.powertrain} />
                                                        <small className="text-danger"> {this.state.powertrainValid ? '' : 'Min value 1...'} </small>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="body" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                        <strong>BODY</strong>
                                                    </label>
                                                    <div className="col-md-8 col-sm-12">
                                                        <input type="number" name="body" id="body"
                                                            className={`form-control form-control-sm ${this.errorClass(this.state.bodyValid)}`}
                                                            defaultValue={quality.body} />
                                                        <small className="text-danger"> {this.state.bodyValid ? '' : 'Min value 1...'} </small>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="interior" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                        <strong>INTERIOR</strong>
                                                    </label>
                                                    <div className="col-md-8 col-sm-12">
                                                        <input type="number" name="interior" id="interior"
                                                            className={`form-control form-control-sm ${this.errorClass(this.state.interiorValid)}`}
                                                            defaultValue={quality.interior} />
                                                        <small className="text-danger"> {this.state.interiorValid ? '' : 'Min value 1...'} </small>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="accessories" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                        <strong>ACCESSORIES</strong>
                                                    </label>
                                                    <div className="col-md-8 col-sm-12">
                                                        <input type="number" name="accessories" id="accessories"
                                                            className={`form-control form-control-sm ${this.errorClass(this.state.accessoriesValid)}`}
                                                            defaultValue={quality.accessories} />
                                                        <small className="text-danger"> {this.state.accessoriesValid ? '' : 'Min value 1...'} </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col text-center">
                                            <button type="submit" disabled={!this.state.formValid} className="btn btn-success my-2" title="Save">
                                                Save <FontAwesomeIcon icon="save" size="lg" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewPage2;