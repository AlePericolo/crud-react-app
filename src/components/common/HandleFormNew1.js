import React from 'react'
import ArrayQuality from './ArrayQuality'

export default class HandleFormNew1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: this.props.data };
    }

    addArrayQuality = (e) => {
        e.preventDefault();
        const { data } = this.state
        data.quality = [...this.state.data.quality, { name: "", rating: "" }]
        this.setState({ data, });
    }

    printArrayQuality = () => {

        return (
            this.state.data.quality.map((obj, index) => {
                return (
                    <div key={index} className="border border-light p-3">
                        <div className="form-group row">
                            <label htmlFor="name" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                <strong>{`NAME ${index + 1}:`}</strong>
                            </label>
                            <div className="col-md-8 col-sm-12">
                                <input type="text" name="name" id={index} onChange={this.handleChange} className="form-control form-control-sm" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="rating" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                <strong>{`RATING ${index + 1}:`}</strong>
                            </label>
                            <div className="col-md-8 col-sm-12">
                                <input type="number" name="rating" id={index} onChange={this.handleChange} className="form-control form-control-sm" />
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    handleSubElement = (object) => {
        //console.log(object);

        if (object instanceof Array) {
            return (
                <div className="form-group row">
                    <div className="col-12 text-center">
                        <button className="btn btn-sm btn-light mx-2 my-3" onClick={this.addArrayQuality}> Add array quality</button>
                        {this.printArrayQuality(object)}
                    </div>
                </div>
            )
        } else {
            return <HandleFormNew1 data={object} />
        }
    }

    handleElement = (element, key) => {

        if (element instanceof Object) {
            return (
                <div>
                    {this.handleSubElement(element)}
                </div>
            )
        } else {
            return (
                <div>
                    <input name={key} id={key} type={typeof element} className="form-control form-control-sm" disabled={key === 'id'} onChange={this.handleChange} value={element}></input>
                </div>
            )
        }
    }

    handleChange = (e) => {

        const newState = { ...this.state }

        if (["name", "rating"].includes(e.target.name)) {
            let quality = { ...this.state.data.quality }
            quality[e.target.id][e.target.name] = e.target.value
        } else {
            newState.data[e.target.name] = e.target.value;
        }

        this.setState(newState);
    }

    render() {

        return Object.keys(this.state.data).map((key, index) => {
            return (
                <div key={index} className="form-group row">
                    <label htmlFor={key} className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right"><strong>{key.toUpperCase()}:</strong></label>
                    <div className="col-md-8 col-sm-12">
                        {this.handleElement(this.state.data[key], key)}
                    </div>
                </div>
            )
        })
    }
}