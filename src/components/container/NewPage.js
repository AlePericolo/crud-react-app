import React, { Component } from 'react';
import Service from '../api/Service';
//import Title from '../common/Title'
import { Link } from 'react-router-dom'
import ArrayQuality from "../common/ArrayQuality"
import ObjectQuality from "../common/ObjectQaulity"
import Wiki from "../common/Wiki"
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NewPage extends Component {

    constructor(props) {
        super(props);

        this.state = {

            data: {
                manufacturer: '',
                model: '',
                price: 0,
            },
            qualityArrayButton: false,
            qualityObjButton: false,

            manufacturerValid: false,
            modelValid: false,
            priceValid: false,
            formValid: false
        }

        this.addService = new Service();
    }

    //quality as array
    addQualityArray = (e) => {
        e.preventDefault();
        //console.log(this.state);
        if (Array.isArray(this.state.data.quality)) {
            //console.log('add element to array');
            this.setState(prevState => ({
                ...prevState,
                data: {
                    ...prevState.data,
                    quality: [...prevState.data.quality, { name: "", rating: 0 }]
                }
            }))
        } else {
            //console.log('new array');
            this.setState(prevState => ({
                data: {
                    ...prevState.data,
                    quality: [{ name: "", rating: 0 }]
                }
            }),
                this.disableButton('o'),
            )
        }
        //add wiki
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                wiki: ''
            }
        }))
    }

    //quality as object
    addQualityObject = (e) => {
        e.preventDefault();
        //console.log('object')
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                quality: { 'overall': 0, 'mechanical': 0, 'powertrain': 0, 'body': 0, 'interior': 0, 'accessories': 0 }
            }
        }),
            this.disableButton('a'),
        )
    }

    disableButton(p) {
        //console.log(p);
        if (p === 'o') {
            this.setState({ qualityObjButton: true }, () => console.log(this.state))
        }
        if (p === 'a') {
            this.setState({ qualityArrayButton: true }, () => console.log(this.state))
        }
    }

    handleChange = (e) => {
        //console.log(!this.state.quality);
        const name = e.target.name;
        const value = e.target.value;
        //e.target.name not in quality(arr+obj)
        if (!['name', 'rating', 'overall', 'mechanical', 'powertrain', 'body', 'interior', 'accessories'].includes(name)) {
            this.setState(
                { data: { ...this.state.data, [name]: value } },
                () => { this.validateField(name, value) },
                () => { console.log(this.state.data) }
            )
        }
        //quality defined: case array
        if (this.state.data.quality && ['name', 'rating'].includes(name)) {
            let quality = [...this.state.data.quality]
            quality[e.target.id][name] = value
            this.setState({ quality }, () => {/*console.log(this.state.data.quality)*/ })
        }
        //quality defined: case object
        if (this.state.data.quality && Object.keys(this.state.data.quality).includes(name)) {
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
        }
    }

    validateField(field, value) {
        let manufacturerValid = this.state.manufacturerValid;
        let modelValid = this.state.modelValid;
        let priceValid = this.state.priceValid;
        //console.log(handleError);
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
            default:
                break;
        }
        this.setState(
            {
                manufacturerValid: manufacturerValid,
                modelValid: modelValid,
                priceValid: priceValid,
            }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.manufacturerValid && this.state.modelValid && this.state.priceValid });
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
        //console.log(this.state.data);
        let { manufacturer, model, price, quality, wiki } = this.state.data
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
                                    <h2 align="center"> Add new element </h2>
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
                                                <input type="number" min="0" name="price" id="price"
                                                    className={`form-control form-control-sm ${this.errorClass(this.state.priceValid)}`}
                                                    defaultValue={price} />
                                                <small className="text-danger"> {this.state.priceValid ? '' : 'Sorry, it can\'t be free...'} </small>
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm text-center">
                                                    <button onClick={this.addQualityArray} disabled={this.state.qualityArrayButton} className="btn btn-sm btn-light my-2">
                                                        Add new quality as array <FontAwesomeIcon icon="plus" />
                                                    </button>
                                                    <ArrayQuality quality={quality} />
                                                </div>
                                                <div className="col-sm text-center">
                                                    <button onClick={this.addQualityObject} disabled={this.state.qualityObjButton} className="btn btn-sm btn-light my-2">
                                                        Add new quality as object <FontAwesomeIcon icon="plus" />
                                                    </button>
                                                    <ObjectQuality quality={quality} />
                                                </div>
                                            </div>
                                        </div>
                                        <Wiki wiki={wiki} />
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
export default NewPage;