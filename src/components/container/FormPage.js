import React, { Component } from 'react';
import Service from '../Service';

class FormPage extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = { data: '', loadComplete: false };
        this.addService = new Service();
    }

    render() {
        if(this.state.loadComplete){
        return (
            <div>
                ciao
            </div>
        )}
        return '';
    }
}

export default FormPage;