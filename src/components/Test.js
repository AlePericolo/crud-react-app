import React from 'react';
import Element from './Element';
import { Route, Link } from 'react-router-dom'
import handleElement from './common/HandleElement'
import EditPage from './container/EditPage'
import DeletePage from './container/DeletePage';

export default class Test extends React.Component {


    handleElement = (element) => {
        if (typeof (element) === 'object') {
            return this.handleObject(element)
        } else {
            return element
        }
    }

    handleObject = (obj) => {

        const keys = Object.keys(obj);
        return keys.map((key, j) => {
            return (
                /*
                <ul key={j} className="list-group list-group-flush">
                    <li className="list-group-item">
                        <strong>{key}:</strong>
                        {this.handleElement(obj[key])}
                    </li>
                </ul>
                */
                <div key={j} className="container-fluid">
                    <div key={j} className="row border-bottom">

                        <div className="col"><strong>{key}:</strong></div>
                        <div className="col">{this.handleElement(obj[key])}</div>
                    </div>
                </div>
            )
        })
    }

    handleList = () => {
        return this.props.data.map((obj, i) => {
            return (
                <div key={i} className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            {this.handleObject(obj)}
                        </div>
                        <div className="card-footer text-center">
                            <Link to={`/edit/${obj.id}`}>
                                <button type="button" className="btn btn-warning mx-2">Edit</button>
                            </Link>
                            <Link to={`/delete/${obj.id}`}>
                                <button type="button" className="btn btn-danger mx-2">Delete</button>
                            </Link>
                        </div>
                    </div>
                    <Route path="/edit/:id" component={EditPage} />
                    <Route path="/delete/:id" component={DeletePage} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.handleList()}
                </div>
            </div>
        );
    }
}