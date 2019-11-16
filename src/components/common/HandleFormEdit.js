import React from 'react'

export default class HandleFormEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: this.props.data };
    }

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
                    <input name={key} id={key} type={typeof element} className="form-control" disabled={key === 'id'} onChange={this.handleChange} value={element}></input>
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
                <div key={index} className="container">
                    {/*<div className="form-group">*/}
                    <div className="form-group row">
                        <label htmlFor={key} className="col-sm-4 col-form-label text-right"><strong>{key.toUpperCase()}:</strong></label>
                        <div class="col-sm-8">
                            {this.handleElement(this.state.data[key], key)}
                        </div>
                    </div>
                </div>
            )
        })
    }
}