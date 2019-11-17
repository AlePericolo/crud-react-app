import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

                    <button type="button" className="btn btn btn-light btn-sm my-1" title="Show" data-toggle="modal" data-target={`#modal${this.props.data.id}`}>
                        <FontAwesomeIcon icon="eye" size="xs" />
                    </button>
                    <div className="modal fade" id={`modal${this.props.data.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content text-white bg-dark">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">{key.toUpperCase()}</h5>
                                    <button type="button" className="btn btn-danger btn-sm" data-dismiss="modal">
                                        <FontAwesomeIcon icon="times" size="xs" />
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {this.handleSubElement(element)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {

            if ((/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/).test(element)) {
                return (
                    <a className="btn btn btn-light btn-sm" href={element} target="_blank" rel="noopener noreferrer" title="Link" role="button">
                        <FontAwesomeIcon icon="link" size="xs" />
                    </a>
                )
            }
            return element
        }
    }

    render() {

        return Object.keys(this.props.data).map((key, index) => {
            if (key !== 'id') {
                return (
                    <div key={index} className="container-fluid">
                        <div className="row">
                            <div className="col text-right pr-3">
                                <strong>{key.toUpperCase()}:</strong>
                            </div>
                            <div className="col">
                                {this.handleElement(this.props.data[key], key)}
                            </div>
                        </div>
                    </div>
                )
            }
            return '';
        })
    }
}