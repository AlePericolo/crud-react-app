import React from 'react'

export default class HandleObject extends React.Component {


    handleSubElement = (object) => {

        if (object instanceof Array) {
            return object.map((obj, k) => {
                return (
                    <div key={k}>
                        <HandleObject data={obj} />
                    </div>
                )
            })
        } else {
            return <HandleObject data={object} />
        }
    }

    handleElement = (element, index) => {

        if (element instanceof Object) {

            return (
                <div>
                    <button className="btn btn-primary btn-sm" type="button" data-toggle="collapse" data-target={`#collapse${this.props.data.id}`} aria-expanded="false" aria-controls="collapseExample">
                        Show
                    </button>
                    <div className="collapse mt-2" id={`collapse${this.props.data.id}`}>
                        {this.handleSubElement(element)}
                    </div>
                </div>
            )

        } else {
            return element
        }

    }

    render() {

        const obj = this.props.data;
        const keys = Object.keys(obj);

        return keys.map((key, index) => {
            return (
                <div key={index} className="container-fluid">
                    <div className="row border-bottom">
                        <div className="col"><strong>{key}:</strong></div>
                        <div className="col">
                            {this.handleElement(obj[key])}
                        </div>
                    </div>
                </div>
            )
        })
    }
}