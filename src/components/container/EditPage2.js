import React, { Component } from 'react';
import Service from '../api/Service';
//import Title from '../common/Title'
import HandleFormEdit2 from '../common/HandleFormEdit2'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EditPage2 extends Component {

    constructor(props) {
        super(props);

        console.log("EDIT 2");

        this.state = {
            id: this.props.match.params.id,
            data: null,
            loadComplete: false,
            manufacturerValid: true,
            modelValid: true,
            priceValid: true,
            formValid: true
        };
        this.addService = new Service();
    }

    componentDidMount() {

        Service.getApi(`/${this.state.id}`)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ data: response.data });
                    this.setState({ loadComplete: true })
                }
            })
            .catch(function (error) {
                Swal.fire(error.toString())
                console.log(error);
            });
    }

    handleChange = (e) => {
        //console.log(!this.state.quality);
        const name = e.target.name;
        const value = e.target.value;
        //e.target.name not in quality(arr+obj)
        if (!['name', 'rating', 'overall', 'mechanical', 'powertrain', 'body', 'interior', 'accessories'].includes(name)) {
            this.setState(
                { data: { ...this.state.data, [name]: value } },
                () => { this.validateField(name, value) },
                () => { console.log(this.state.data) }
            )
        }
        //quality defined: case array
        if (this.state.data.quality && ['name', 'rating'].includes(name)) {
            let quality = [...this.state.data.quality]
            quality[e.target.id][name] = value
            this.setState({ quality }, () => {/*console.log(this.state.data.quality)*/ })
        }
        //quality defined: case object
        if (this.state.data.quality && Object.keys(this.state.data.quality).includes(name)) {
            const { quality } = this.state.data
            quality[name] = value
            this.setState(
                {
                    data:
                        { ...this.state.data },
                    quality: { quality }
                },
                () => { this.validateField(name, value) },
                () => console.log(this.state.quality)
            )
        }
    }

    validateField(field, value) {
        let manufacturerValid = this.state.manufacturerValid;
        let modelValid = this.state.modelValid;
        let priceValid = this.state.priceValid;
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
                manufacturerValid: manufacturerValid,
                modelValid: modelValid,
                priceValid: priceValid,
            }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.manufacturerValid && this.state.modelValid && this.state.priceValid });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {

        if (this.state.loadComplete) {
            return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            {/*<Title title={'Edit'} />*/}
                            <div className="card my-3">
                                <div className="card-header bg-dark text-warning">
                                    <div className="d-flex justify-content-around">
                                        <Link to="/">
                                            <button type="button" className="btn btn-info" title="Go back">
                                                <FontAwesomeIcon icon="arrow-left" size="lg" />
                                            </button>
                                        </Link>
                                        <h2 align="center"> Edit this element </h2>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="container">
                                        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                                            <HandleFormEdit2 data={this.state.data} />
                                            <div className="col text-center">
                                                <button type="submit" disabled={!this.state.formValid} className="btn btn-warning my-2" title="Edit">
                                                    Save <FontAwesomeIcon icon="save" size="lg" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return null
    }
}
export default EditPage2;