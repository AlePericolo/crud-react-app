import React from 'react'

const HandleElement = (data) => {

    const element = data.value;
    const key = data.k
    console.log(element)

    if (element instanceof Object) {
        if (element instanceof Array) {
            //return 'array'
            return element.map((obj, index) => {
                console.log(obj)
                //return 'arr'


                return (
                    <div key={index}>
                        <HandleFormEdit2 data={obj} />
                    </div>
                )
            })
        } else {
            return 'object'
            return <HandleFormEdit2 data={element} />
        }
    } else {
        return (
            <div>
                <input name={key} id={key} type={typeof element} className="form-control form-control-sm" disabled={key === 'id'} defaultValue={element}></input>
            </div>
        )
    }
}

const HandleFormEdit2 = (props) => {

    console.log(props);
    let { data } = props;
    console.log(data);

    return (
        Object.keys(data).map((key, index) => {
            if (key !== 'id') {
                return (
                    <div key={index} className="form-group row">
                        <label htmlFor={key} className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right"><strong>{key.toUpperCase()}:</strong></label>
                        <div className="col-md-8 col-sm-12">
                            <HandleElement value={data[key]} k={key} />
                        </div>
                    </div>
                )
            }
            return null
        })
    )

}
export default HandleFormEdit2
/*
    handleSubElement = (object) => {

        if (object instanceof Array) {
            return object.map((obj, k) => {
                return (
                    <div key={k}>
                        <HandleFormEdit data={obj} />
                    </div>
                )
            })
        } else {
            return <HandleFormEdit data={object} />
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
                    <input name={key} id={key} type={typeof element} className="form-control form-control-sm" disabled={key === 'id'} defaultValue={element}></input>
                </div>
            )
        }
    }

   handleData = () => {
    return Object.keys(this.state.data).map((key, index) => {
        if (key !== 'id') {
            return (
                <div key={index} className="form-group row">
                    <label htmlFor={key} className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right"><strong>{key.toUpperCase()}:</strong></label>
                    <div className="col-md-8 col-sm-12">
                        {this.handleElement(this.state.data[key], key)}
                    </div>
                </div>
            )
        }
        return ''
    })
   }



    render() {
        console.log(props);

        let { data } = props;


        {this.handleElement()}

    }
}*/