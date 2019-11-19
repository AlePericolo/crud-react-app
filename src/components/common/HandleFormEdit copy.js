import React from 'react'

const HandleSubElement = (data) => {

    console.log(data)

    const object = data;

    //return 'ciao'
    
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


const HandleElement = (data) => {

    //console.log(data)
    const element = data.value;
    const key = data.k
    
    if (element instanceof Object) {
        return (
            <div>
                <HandleSubElement data={element} />
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

const HandleFormEdit = (props) => {

    console.log(props);
    let { data } = props.data;
    
    return (
        Object.keys(data).map((key, index) => {
            if (key !== 'id') {
                return (
                    <div key={index} className="form-group row">
                        <label htmlFor={key} className="col-md-4 col-sm-12 col-form-label col-form-label-sm text-md-right"><strong>{key.toUpperCase()}:</strong></label>
                        {/**/}
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
export default HandleFormEdit
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