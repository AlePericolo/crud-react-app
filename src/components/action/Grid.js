import React from 'react';
import Element from '../Element';
import { Route, Link } from 'react-router-dom'
import HandleObject from '../common/HandleObject'
import EditPage from '../container/EditPage'
import DeletePage from '../container/DeletePage';

export default class Grid extends React.Component {

    handleGrid = () => {
        return this.props.data.map((obj, i) => {
            return (
                <div key={i} className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <HandleObject data={obj} />
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
                    {this.handleGrid()}
                </div>
            </div>
        );
    }
}