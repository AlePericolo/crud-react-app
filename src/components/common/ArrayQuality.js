import React from "react"

const ArrayQuality = (props) => {

    //console.log(typeof props.quality)
    //console.log(Array.isArray(props.quality))

    if (props.quality && Array.isArray(props.quality)) {
        return (
            props.quality.map((obj, index) => {
                return (
                    <div key={index} className="border border-light p-3 my-2">
                        <div className="form-group row">
                            <label htmlFor="name" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                <strong>{`NAME ${index + 1}:`}</strong>
                            </label>
                            <div className="col-md-8 col-sm-12">
                                <input type="text" name="name" id={index} className="form-control form-control-sm" defaultValue={obj.name} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="rating" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                <strong>{`RATING ${index + 1}:`}</strong>
                            </label>
                            <div className="col-md-8 col-sm-12">
                                <input type="number" min="0" name="rating" id={index} className="form-control form-control-sm" defaultValue={obj.rating} />
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
    return null
}
export default ArrayQuality