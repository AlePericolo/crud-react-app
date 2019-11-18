import React from "react"

const Wiki = (props) => {

    //console.log(props.wiki)
    let { wiki } = props;

    if (typeof wiki === 'string' || wiki instanceof String) {

        return (
            <div className="form-group row">
                <label htmlFor="wiki" className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right">
                    <strong>WIKI</strong>
                </label>
                <div className="col-md-8 col-sm-12">
                    <input type="text" name="wiki" id="wiki" className="form-control form-control-sm" defaultValue={wiki} />
                </div>
            </div>
        )
    }
    return ''
}
export default Wiki