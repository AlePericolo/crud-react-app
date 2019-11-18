import React, { Component } from 'react';
import Service from '../api/Service';
//import Title from '../common/Title'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ArrayQuality from "../common/ArrayQuality"


class NewPage2 extends Component {

    constructor(props) {
        super(props);
        console.log('test');

        this.addService = new Service();
    }

    state = {
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
    }

    handleChange = (e) => {

        if (Object.keys(this.state.quality).includes(e.target.name) ) {
            let quality = {...this.state.quality}   
             quality[e.target.name] = e.target.value
            this.setState({ quality }, () => console.log(this.state.quality))
        }else{
            this.setState({ [e.target.name]: e.target.value })
        }
        
      }


    
    handleSubmit = (e) => { 
        e.preventDefault(); 
        console.log(this.state) 
        console.log(this.props);
    }

    render() {

        let {manufacturer, model, price, quality} = this.state

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
                                                <input type="text" name="manufacturer" id="manufacturer" className="form-control form-control-sm" defaultValue={manufacturer} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="model" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                <strong>MODEL</strong>
                                            </label>
                                            <div className="col-md-8 col-sm-12">
                                                <input type="text" name="model" id="model" className="form-control form-control-sm" defaultValue={model}/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="price" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                <strong>PRICE</strong>
                                            </label>
                                            <div className="col-md-8 col-sm-12">
                                                <input type="number" name="price" id="price" className="form-control form-control-sm" defaultValue={price}/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                <strong>QUALITY</strong>
                                            </label>
                                            <div className="border border-light p-3 my-2">

                                                <div className="form-group row">
                                                    <label htmlFor="overall" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                        <strong>OVERALL</strong>
                                                    </label>
                                                    <div className="col-md-8 col-sm-12">
                                                        <input type="number" name="overall" id="overall" className="form-control form-control-sm" defaultValue={quality.overall}/>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label htmlFor="mechanical" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                        <strong>MECHANICAL</strong>
                                                    </label>
                                                    <div className="col-md-8 col-sm-12">
                                                        <input type="number" name="mechanical" id="mechanical" className="form-control form-control-sm" defaultValue={quality.mechanical}/>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label htmlFor="powertrain" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                        <strong>POWERTRAIN</strong>
                                                    </label>
                                                    <div className="col-md-8 col-sm-12">
                                                        <input type="number" name="powertrain" id="powertrain" className="form-control form-control-sm" defaultValue={quality.powertrain}/>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label htmlFor="body" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                        <strong>BODY</strong>
                                                    </label>
                                                    <div className="col-md-8 col-sm-12">
                                                        <input type="number" name="body" id="body" className="form-control form-control-sm" defaultValue={quality.body}/>
                                                    </div>
                                                </div>

                                                <div className="form-group row">
                                                    <label htmlFor="interior" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                        <strong>INTERIOR</strong>
                                                    </label>
                                                    <div className="col-md-8 col-sm-12">
                                                        <input type="number" name="interior" id="interior" className="form-control form-control-sm" defaultValue={quality.interior}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="accessories" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                        <strong>ACCESSORIES</strong>
                                                    </label>
                                                    <div className="col-md-8 col-sm-12">
                                                        <input type="number" name="accessories" id="accessories" className="form-control form-control-sm" defaultValue={quality.accessories}/>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        
                                        <div className="col text-center">
                                            <button type="submit"className="btn btn-success my-2" title="Save">
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