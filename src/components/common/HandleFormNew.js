import React from 'react'
import { Link } from 'react-router-dom'
import ArrayQuality from './ArrayQuality'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class HandleFormNew extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ...this.props.data };
        //console.log(this.state)
    }


    handleChange = (e) => {

        const newState = { ...this.state }

        if (["name", "rating"].includes(e.target.name)) {

            let quality = { ...this.state.quality }
            quality[e.target.id][e.target.name] = e.target.value
        }
        //static elements
        else {
            newState[e.target.name] = e.target.value;
            this.setState(newState);
        }
        console.log(newState);
    }

    addArrayQuality = (e) => {
        this.setState((prevState) => ({
            quality: [...prevState.quality, { name: "", rating: "" }],
        }));
    }

    handleSubmit = (e) => { e.preventDefault(); console.log(this.state) }

    render() {

        let { quality } = this.state;

        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <div className="form-group row">
                    <label htmlFor="manufacturer" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                        <strong>MANUFACTURER:</strong>
                    </label>
                    <div className="col-md-8 col-sm-12">
                        <input type="text" name="manufacturer" id="manufacturer" defaultValue={this.state.manufacturer} className="form-control form-control-sm" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="model" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                        <strong>MODEL:</strong>
                    </label>
                    <div className="col-md-8 col-sm-12">
                        <input type="text" name="model" id="model" defaultValue={this.state.model} className="form-control form-control-sm" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="price" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                        <strong>PRICE:</strong>
                    </label>
                    <div className="col-md-8 col-sm-12">
                        <input type="number" name="price" id="price" defaultValue={this.state.price} className="form-control form-control-sm" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col text-center">
                        <button className="btn btn-sm btn-light mx-2 my-3" onClick={this.addArrayQuality}> Add quality</button>
                        <ArrayQuality quality={quality} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="wiki" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                        <strong>WIKI:</strong>
                    </label>
                    <div className="col-md-8 col-sm-12">
                        <input type="text" name="wiki" id="wiki" defaultValue={this.state.wiki} className="form-control form-control-sm" />
                    </div>
                </div>

                <div className="form-group col-12 text-center">
                    <button type="submit" value="submit" className="btn btn-success mx-2" title="Save">
                        <FontAwesomeIcon icon="save" size="lg" />
                    </button>
                </div>
            </form>

        )
    }

}