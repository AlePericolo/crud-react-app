import React from 'react';

export default class Element extends React.Component {

    render() {
        return this.props.keys.map((key, index) => {
            return (
                <div className="border-bottom">
                    <div className="row">
                        <strong className="col-xs-12 col-sm-6">{key}</strong>
                        <div className="col-xs-12 col-sm-6">
                            <Item index={index} k={key} v={this.props.element[key]} />
                        </div>
                    </div>
                </div>
            )
        })
    }
}

const Item = (props) => {
    if (props.v instanceof Array) {
        return (
            <List data={props.v} />
        )
    } else if (props.v instanceof Object) {
        return (
            <Element element={props.v} keys={Object.keys(props.v)} />
        )
    } else {
        return (
            <div>{props.v}</div>
        )
    }
}

const List = (props) => {
    var items = props.data;
    return items.map((obj, index) => {
        return <Element element={obj} keys={Object.keys(obj)} />
    })
}