import React, { Component } from 'react';
import Service from '../api/Service';
//import Title from '../common/Title'
import { Link } from 'react-router-dom'
import ArrayQuality from "../common/ArrayQuality"
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NewPage extends Component {

    constructor(props) {
        super(props);

        this.state = {

            data:{
                manufacturer: '',
                model: '',
                price: 0,
                quality: [
                    {name:'',rating:0}
                ],
                wiki:''   
            },           
            formErrors: {
                manufacturerMex: 'Insert a manufacturer', 
                modelMex: 'Insert a model',
                priceMex: 'Sorry, it can\'t be free...'
            },
            manufacturerValid: false,
            modelValid: false,
            priceValid: false,
            formValid: false
        }

        this.addService = new Service();
    }

    addQuality = (e) => {
        e.preventDefault();

        this.setState(prevState => ({
            ...prevState,
            data: {
                ...prevState.quality,
                quality: [...prevState.data.quality, {name:"", rating: 0}]
            }
        }),()=> {console.log(this.state.data)})
    }
    
    handleChange = (e) => {

        if (['name','rating'].includes(e.target.name) ) {
          let quality = [...this.state.data.quality]   
          quality[e.target.id][e.target.name] = e.target.value
          this.setState({ quality }, () => {/*console.log(this.state.data.quality)*/})
        } else {
            const name = e.target.name;
            const value = e.target.value; 
            this.setState(
              { data: { ...this.state.data,[name]: value }},
              () => { this.validateField(name, value) },
              () => { console.log(this.state.data)}
            )
        }
    }

    validateField(field, value) {
        let handleError = this.state.formErrors;
        let manufacturerValid = this.state.manufacturerValid;
        let modelValid = this.state.modelValid;
        let priceValid = this.state.priceValid;

        console.log(handleError);
    
        switch(field) {
          case 'manufacturer':
            manufacturerValid = value.length > 0
            handleError.manufacturerMex = manufacturerValid ? '' : 'Insert a manufacturer';
            break;
          case 'model':
            modelValid = value.length > 0
            handleError.modelMex = modelValid ? '' : 'Insert a model';
            break;
          case 'price':
            priceValid = value > 0
            handleError.priceMex = priceValid ? '' : 'Sorry, it can\'t be free...';
            break;
          default:
            break;
        }

        this.setState(
            { formErrors: handleError,
              manufacturerValid: manufacturerValid,
              modelValid: modelValid,
              priceValid: priceValid,
            }, this.validateForm);  
    }
    
    validateForm() {
        this.setState({formValid: this.state.manufacturerValid && this.state.modelValid && this.state.priceValid});
    }

    errorClass(error) {
        //console.log(error)
        return(error ? '' : ' required-field');
    }
        
    handleSubmit = (e) => { 
        e.preventDefault(); 
        //console.log(this.state.data) 
        console.log(this.props);
        const {data} = this.state;
        console.log(data);
    

        Service.postApi( data )
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

        let {manufacturer, model, price, quality, wiki} = this.state.data

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
                                                    <small className="text-danger"> {this.state.formErrors.manufacturerMex} </small>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="model" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                    <strong>MODEL</strong>
                                                </label>
                                                <div className="col-md-8 col-sm-12">
                                                    <input type="text" name="model" id="model" 
                                                        className={`form-control form-control-sm ${this.errorClass(this.state.modelValid)}`}
                                                        defaultValue={model}/>
                                                    <small className="text-danger"> {this.state.formErrors.modelMex} </small>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="price" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                                    <strong>PRICE</strong>
                                                </label>
                                                <div className="col-md-8 col-sm-12">
                                                    <input type="number" min="0" name="price" id="price" 
                                                        className={`form-control form-control-sm ${this.errorClass(this.state.priceValid)}`}
                                                        defaultValue={price}/>
                                                    <small className="text-danger"> {this.state.formErrors.priceMex} </small>
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