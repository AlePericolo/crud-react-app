import React from 'react';
import Element from './Element';
//import DeleteButton from './common/DeleteButton';
import { Route, Link } from 'react-router-dom'
import EditPage from './container/EditPage';
import DeletePage from './container/DeletePage';

export default class Grid extends React.Component {

    geContent = function () {
        /*provare a spostare il map nel component Element*/
        /*<DeleteButton id={obj.id} />*/

        return this.props.data.map((obj, index) => {

            return (
                <div key={index} className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <Element data={obj} keys={Object.keys(obj)} />
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
            <div>
                <div className="container-fluid">
                    <div className="row">
                        {this.geContent()}
                    </div>
                </div>
            </div>
        );
    }
}
