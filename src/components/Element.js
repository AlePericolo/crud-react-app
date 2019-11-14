import React from 'react';
import DeleteButton from './common/DeleteButton';
import Title from './common/Title'
import { Link } from 'react-router-dom';

class Item extends React.Component {

    constructor(props) {
        super(props)
        //console.log(this.props);
    }

    render() {
        if (this.props.v instanceof Array) {
            console.log(this.props.v);
            console.log(this.props.k);
            console.log(this.props.index);
            return (
                <div>
                    <div className="row">
                        <strong className="col-xs-12 col-sm-6">{this.props.k}</strong>
                        <div className="col-xs-12 col-sm-6">
                            a
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.v instanceof Object) {
            return (
                <div>
                    <div className="row">
                        <strong className="col-xs-12 col-sm-6">{this.props.k}</strong>
                        <div className="col-xs-12 col-sm-6">
                            <Element element={this.props.v} keys={Object.keys(this.props.v)} />
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div key={this.props.index} className="row">
                    <strong className="col-xs-12 col-sm-6">{this.props.k}</strong>
                    <div className="col-xs-12 col-sm-6">{this.props.v}</div>
                </div>
            )
        }

    }
}

export default class Element extends React.Component {


    constructor(props) {
        super(props)
        //console.log(this.props);
    }

    render() {
        return this.props.keys.map((key, index) => {
            //console.log(index);
            //console.log(key)
            //console.log(this.props.element[key])
            return (
                <div className="border-bottom">
                    <Item index={index} k={key} v={this.props.element[key]} />
                </div>
            )
        })
    }


}