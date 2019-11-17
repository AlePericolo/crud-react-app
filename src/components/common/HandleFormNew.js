import React from 'react'

export default class HandleFormNew extends React.Component {

    state = {
        qualityArray: [],
        wiki: "",
        qualityObject: { overall: "", mechanical: "", powertrain: "", body: "", interior: "", accessories: "" },
    }


    addArrayQuality = (e) => {
        this.setState((prevState) => ({
            qualityArray: [...prevState.qualityArray, { name: "", rating: "" }],
        }));
    }
    handleSubmit = (e) => { e.preventDefault() }

    render() {

        let { qualityArray } = this.state;
        let { qualityObject } = this.state;

        return (
            <div>
                <div className="form-group row">
                    <label htmlFor="manufacturer" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                        <strong>MANUFACTURER:</strong>
                    </label>
                    <div className="col-md-8 col-sm-12">
                        <input type="text" name="manufacturer" id="manufacturer" className="form-control form-control-sm" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="model" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                        <strong>MODEL:</strong>
                    </label>
                    <div className="col-md-8 col-sm-12">
                        <input type="text" name="model" id="model" className="form-control form-control-sm" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="price" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                        <strong>PRICE:</strong>
                    </label>
                    <div className="col-md-8 col-sm-12">
                        <input type="number" name="price" id="price" className="form-control form-control-sm" />
                    </div>
                </div>
                <div className="form-group col-12 text-center">
                    <button className="btn btn-sm btn-light mx-2 my-3" onClick={this.addArrayQuality}> Add array quality</button>
                    {
                        qualityArray.map((obj, index) => {
                            return (
                                <div className="border border-light p-3">
                                    <div key={index} className="form-group row">
                                        <label htmlFor={`name${index}`} className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                            <strong>{`NAME ${index + 1}:`}</strong>
                                        </label>
                                        <div className="col-md-8 col-sm-12">
                                            <input type="text" name={`name${index}`} id={`name${index}`} className="form-control form-control-sm" />
                                        </div>
                                    </div>
                                    <div key={index} className="form-group row">
                                        <label htmlFor={`rating${index}`} className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                            <strong>{`RATING ${index + 1}:`}</strong>
                                        </label>
                                        <div className="col-md-8 col-sm-12">
                                            <input type="text" name={`rating${index}`} id={`rating${index}`} className="form-control form-control-sm" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        )
    }

}