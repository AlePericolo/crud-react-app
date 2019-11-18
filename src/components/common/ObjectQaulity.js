import React from "react"

const ObjectQuality = (props) => {

    console.log(props.quality)

    return <div>object</div>

    if (props.quality) {
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
                                <input type="number" name="rating" id={index} className="form-control form-control-sm" defaultValue={obj.rating} />
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
    return ''
}
export default ObjectQuality