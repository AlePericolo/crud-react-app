import React from 'react'
import { isWebUri } from 'valid-url';

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

    handleElement = (element, key) => {

        if (element instanceof Object) {
            return (
                <div>
                    {/*
                    <button className="btn btn-primary btn-sm" type="button" data-toggle="collapse" data-target={`#collapse${this.props.data.id}`} aria-expanded="false" aria-controls="collapseExample">
                        Show
                    </button>
                    <div className="collapse mt-2" id={`collapse${this.props.data.id}`}>
                        {this.handleSubElement(element)}
                    </div>
                    */}

                    <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target={`#modal${this.props.data.id}`}>
                        Show
                    </button>

                    <div className="modal fade" id={`modal${this.props.data.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">{key}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {this.handleSubElement(element)}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {

            if ((/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/).test(element)) {
                return <a className="btn btn-primary btn-sm" href={element} target="_blank" role="button">Link</a>
            }
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
                            {this.handleElement(obj[key], key)}
                        </div>
                    </div>
                </div>
            )
        })
    }
}