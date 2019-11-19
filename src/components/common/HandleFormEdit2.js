import React from 'react'

const HandleElement = (data) => {

    const element = data.value;
    const key = data.k
    const { error } = data;
    console.log(this.state);

    if (element instanceof Object) {
        if (element instanceof Array) {
            return element.map((obj, index) => {
                return (
                    <div key={index}>
                        <HandleFormEdit2 data={obj} />
                    </div>
                )
            })
        } else {
            return <HandleFormEdit2 data={element} />
        }
    } else {
        return (
            <div>
                < input name={key} id={key} type={typeof element} className="form-control form-control-sm" disabled={key === 'id'} defaultValue={element}></input>
            </div >
        )
    }
}

const HandleFormEdit2 = (props) => {

    console.log(props);
    const { data } = props
    const { error } = props
    //console.log(data);
    //console.log(error);

    return (
        Object.keys(data).map((key, index) => {
            if (key !== 'id') {
                return (
                    <div key={index} className="form-group row">
                        <label htmlFor={key} className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right"><strong>{key.toUpperCase()}:</strong></label>
                        <div className="col-md-8 col-sm-12">
                            <HandleElement value={data[key]} k={key} error={error} />
                        </div>
                    </div>
                )
            }
            return null
        })
    )

}
export default HandleFormEdit2
