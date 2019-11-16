import React from 'react'

export default class HandleFormObject extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.data)

        this.state = { data: this.props.data };
    }

    handleSubElement = (object) => {

        if (object instanceof Array) {
            return object.map((obj, k) => {
                return (
                    <div key={k}>
                        <HandleFormObject data={obj} />
                    </div>
                )
            })
        } else {
            return <HandleFormObject data={object} />
        }
    }



    handleElement = (element, key) => {

        //console.log(typeof (element));

        if (element instanceof Object) {
            return (
                <div>
                    {this.handleSubElement(element)}
                </div>
            )
        } else {

            return (<div>
                <input name={key} type="text" className="form-control" onChange={this.handleChange} value={element}></input>
            </div>)
        }

    }

    handleChange = (e) => {

        console.log(e);
        const newValue = e.target.value;
        const key = e.target.name;

        /*FUNZIONA!!!*/
        let newState = Object.assign({}, this.state);
        console.log(newState.data[key]);
        newState.data[key] = newValue;
        this.setState(newState);
    }


    render() {

        return Object.keys(this.props.data).map((key, index) => {
            return (
                <div key={index} className="container-fluid">
                    <div className="row border-bottom">
                        <div className="col"><strong>{key}:</strong></div>
                        <div className="col">
                            {this.handleElement(this.props.data[key], key)}
                        </div>
                    </div>
                </div>
            )
        })

    }

}