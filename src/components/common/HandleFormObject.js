import React from 'react'

export default class HandleFormObject extends React.Component {

    constructor(props) {
        super(props);
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

        if (element instanceof Object) {
            return (
                <div>
                    {this.handleSubElement(element)}
                </div>
            )
        } else {
            return (
                <div>
                    <input name={key} type="text" className="form-control" onChange={this.handleChange} value={element}></input>
                </div>
            )
        }
    }

    handleChange = (e) => {

        const newState = { ...this.state }
        newState.data[e.target.name] = e.target.value;
        this.setState(newState);
    }

    render() {

        return Object.keys(this.state.data).map((key, index) => {
            return (
                <div key={index} className="container-fluid">
                    <div className="row border-bottom">
                        <div className="col"><strong>{key}:</strong></div>
                        <div className="col">
                            {this.handleElement(this.state.data[key], key)}
                        </div>
                    </div>
                </div>
            )
        })
    }
}