import React from "react"

const ObjectQuality = (props) => {

    const { quality } = props;

    if (!Array.isArray(quality)) {

        return (
            <div className="border border-light p-3">
                <div className="form-group row">
                    <label htmlFor="overall" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                        <strong>OVERALL:</strong>
                    </label>
                    <div className="col-md-8 col-sm-12">
                        <input type="number" name="overall" id="overall" className="form-control form-control-sm" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="mechanical" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                        <strong>MECHANICAL:</strong>
                    </label>
                    <div className="col-md-8 col-sm-12">
                        <input type="number" name="mechanical" id="mechanical" className="form-control form-control-sm" />
                    </div>
                </div>
            </div>
        )
    } else {
        return ''
    }


}

export default ObjectQuality