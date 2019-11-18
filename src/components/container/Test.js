import React, { Component } from 'react';
import Service from '../api/Service';
//import Title from '../common/Title'
import HandleFormNew from '../common/HandleFormNew'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ArrayQuality from "../common/ArrayQuality"


class Test extends Component {

    constructor(props) {
        super(props);
        console.log('test');

        this.addService = new Service();
    }

    state = {
        manufacturer: '',
        model: '',
        price: 0,
        quality: [{name:'',rating:0}],
        wiki:''              
    }

    handleChange = (e) => {

        if (Object.keys(this.state.quality[0]).includes(e.target.name) ) {
          let quality = [...this.state.quality]   
          quality[e.target.id][e.target.name] = e.target.value
          this.setState({ quality }, () => console.log(this.state.quality))
        } else {
          this.setState({ [e.target.name]: e.target.value })
        }
        
      }

    addQuality = (e) => {
        e.preventDefault();

        
        this.setState((prevState) => ({
            quality: [...prevState.quality, {name:"", rating:0}],
        }));
    
    }
    
    handleSubmit = (e) => { 
        e.preventDefault(); 
        console.log(this.state) 
        console.log(this.props);
    }

    render() {

        let {manufacturer, model, price, quality, wiki} = this.state

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
                                        <div className="col text-center">
                                            <button onClick={this.addQuality} className="btn btn-sm btn-light my-2"> 
                                                Add new quality <FontAwesomeIcon icon="plus" />
                                            </button>
                                            <ArrayQuality quality={quality} />
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="wiki" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                <strong>WIKI</strong>
                                            </label>
                                            <div className="col-md-8 col-sm-12">
                                                <input type="text" name="wiki" id="wiki" className="form-control form-control-sm" defaultValue={wiki}/>
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

export default Test;