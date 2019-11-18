import React from "react"

const ArrayQuality = (props) => {

    console.log(props.quality)
    return (
        props.quality.map((obj,index) => {
            console.log(index)
            return (
                <div key={index} className="border border-light p-3 my-2">
                    <div className="form-group row">
                        <label htmlFor="name" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                            <strong>{`NAME ${index + 1}:`}</strong>
                        </label>
                        <div className="col-md-8 col-sm-12">
                            <input type="text" name="name" id={index}  className="form-control form-control-sm" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="rating" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                            <strong>{`RATING ${index + 1}:`}</strong>
                        </label>
                        <div className="col-md-8 col-sm-12">
                            <input type="number" name="rating" id={index}  className="form-control form-control-sm" />
                        </div>
                    </div>
                </div>
            )
        })
      )
    }
    export default ArrayQuality