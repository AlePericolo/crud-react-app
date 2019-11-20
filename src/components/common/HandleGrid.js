import React from 'react';
import { Route, Link } from 'react-router-dom'
import HandleObject from './HandleObject'
import EditPage from '../container/EditPage'
import DeletePage from '../container/DeletePage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class HandleGrid extends React.Component {

    handleGrid = () => {
        return this.props.data.map((obj, i) => {
            return (
                <div key={i} className="col-md-4 col-sm-12 my-3">
                    <div className="card boxShadow">
                        <div className="card-body">
                            <HandleObject data={obj} />
                        </div>
                        <div className="card-footer bg-dark text-center">
                            <Link to={`/edit/${obj.id}`}>
                                <button type="button" className="btn btn-outline-warning btn-sm mx-2" title="Go to Edit">
                                    <FontAwesomeIcon icon="pencil-alt" size="xs" />
                                </button>
                            </Link>
                            <Link to={`/delete/${obj.id}`}>
                                <button type="button" className="btn btn-outline-danger btn-sm mx-2" title="Go to Delete">
                                    <FontAwesomeIcon icon="trash-alt" size="xs" />
                                </button>
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