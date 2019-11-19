import React from 'react'

export default class HandleFormEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            formErrors: {
                manufacturerMex: '',
                modelMex: '',
                priceMex: ''
            },
            manufacturerValid: false,
            modelValid: false,
            priceValid: false,
            formValid: false
        };
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
                    <input name={key} id={key} type={typeof element} className="form-control form-control-sm" disabled={key === 'id'} onChange={this.handleChange} value={element}></input>
                </div>
            )
        }
    }

    validateField(field, value) {
        let handleError = this.state.formErrors;
        let manufacturerValid = this.state.manufacturerValid;
        let modelValid = this.state.modelValid;
        let priceValid = this.state.priceValid;

        console.log(handleError);

        switch (field) {
            case 'manufacturer':
                manufacturerValid = value.length > 0
                break;
            case 'model':
                modelValid = value.length > 0
                break;
            case 'price':
                priceValid = value > 0
                break;
            default:
                break;
        }

        this.setState(
            {
                formErrors: handleError,
                manufacturerValid: manufacturerValid,
                modelValid: modelValid,
                priceValid: priceValid,
            }, this.validateForm);
    }

    handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        console.log(name)
        console.log(value)
        const newState = { ...this.state }
        newState.data[name] = value;
        this.setState(newState,
            //() => {this.validateField(name, value)},
            () => { console.log(this.state) }
        );
    }

    render() {

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
}