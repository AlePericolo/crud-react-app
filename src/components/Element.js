import React from 'react';

export default class Element extends React.Component {

    constructor(props) {
        super(props)
        //console.log(this.props);
    }

    render() {
        return this.props.keys.map((key, index) => {
            return (
                <div className="border-bottom">
                    <Item index={index} k={key} v={this.props.element[key]} />
                </div>
            )
        })
    }
}

const Item = (props) => {
    if (props.v instanceof Array) {
        return (
            <div className="row">
                <strong className="col-xs-12 col-sm-6">{props.k}</strong>
                <div className="col-xs-12 col-sm-6">
                    <List data={props.v} />
                </div>
            </div>
        )
    } else if (props.v instanceof Object) {
        return (
            <div className="row">
                <strong className="col-xs-12 col-sm-6">{props.k}</strong>
                <div className="col-xs-12 col-sm-6">
                    <Element element={props.v} keys={Object.keys(props.v)} />
                </div>
            </div>
        )
    } else {
        return (
            <div className="row">
                <strong className="col-xs-12 col-sm-6">{props.k}</strong>
                <div className="col-xs-12 col-sm-6">{props.v}</div>
            </div>
        )
    }
}

const List = (props) => {
    var items = props.data;
    return items.map((obj, index) => {
        return <Element element={obj} keys={Object.keys(obj)} />
    })
}