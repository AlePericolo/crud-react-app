import React from "react"

const ObjectQuality = (props) => {

    //console.log(props.quality)
    //console.log(Array.isArray(props.quality))

    if (props.quality && !Array.isArray(props.quality)) {

        let { quality } = props;

        return (
            <div>



                <div className="form-group row">
                    <label className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                        <strong>QUALITY</strong>
                    </label>
                    <div className="col border border-light p-3 my-2">
                        <div className="form-group row">
                            <label htmlFor="overall" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                <strong>OVERALL</strong>
                            </label>
                            <div className="col-md-8 col-sm-12">
                                <input type="number" min="0" name="overall" id="overall"
                                    className="form-control form-control-sm"
                                    defaultValue={quality.overall} />

                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="mechanical" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                <strong>MECHANICAL</strong>
                            </label>
                            <div className="col-md-8 col-sm-12">
                                <input type="number" name="mechanical" id="mechanical"
                                    className="form-control form-control-sm"
                                    defaultValue={quality.mechanical} />

                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="powertrain" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                <strong>POWERTRAIN</strong>
                            </label>
                            <div className="col-md-8 col-sm-12">
                                <input type="number" name="powertrain" id="powertrain"
                                    className="form-control form-control-sm"
                                    defaultValue={quality.powertrain} />

                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="body" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                <strong>BODY</strong>
                            </label>
                            <div className="col-md-8 col-sm-12">
                                <input type="number" name="body" id="body"
                                    className="form-control form-control-sm"
                                    defaultValue={quality.body} />

                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="interior" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                <strong>INTERIOR</strong>
                            </label>
                            <div className="col-md-8 col-sm-12">
                                <input type="number" name="interior" id="interior"
                                    className="form-control form-control-sm"
                                    defaultValue={quality.interior} />

                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="accessories" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                                <strong>ACCESSORIES</strong>
                            </label>
                            <div className="col-md-8 col-sm-12">
                                <input type="number" name="accessories" id="accessories"
                                    className="form-control form-control-sm"
                                    defaultValue={quality.accessories} />

                            </div>
                        </div>
                    </div>
                </div>





            </div>
        )
    }
    return ''
}
export default ObjectQuality