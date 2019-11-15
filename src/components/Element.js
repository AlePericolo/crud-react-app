import React from 'react';

export default class Element extends React.Component {

    render() {
        //console.log(this.props);
        return this.props.keys.map((key, index) => {
            return (
                <div className="border-bottom">
                    <div className="row">
                        <strong className="col-xs-12 col-sm-5">{key}</strong>
                        <div className="col-xs-12 col-sm-7">
                            <HandleItem index={index} data={this.props.data[key]} />
                        </div>
                    </div>
                </div>
            )
        })
    }
}

const HandleItem = (props) => {
    //console.log(props);
    if (props.data instanceof Array) {
        return (
            <List data={props.data} />
        )
    } else if (props.data instanceof Object) {
        return (
            <Element data={props.data} keys={Object.keys(props.data)} />
        )
    } else {
        return (
            <Value data={props.data} />
        )
    }
}

const Value = (props) => {
    return <div>{props.data}</div>
}

const List = (props) => {

    return props.data.map((obj, index) => {
        return <Element data={obj} keys={Object.keys(obj)} />
    })
}

