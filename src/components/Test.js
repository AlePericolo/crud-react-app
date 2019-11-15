import React from 'react';
import Element from './Element';
import { Route, Link } from 'react-router-dom'
import EditPage from './container/EditPage';
import DeletePage from './container/DeletePage';

export default class Test extends React.Component {


    handleElement = function(data){
        console.log(data);
        return(
            JSON.stringify(data)
        )
    }

    handleData = function () {
        return this.props.data.map((obj, index) => {
            return (
                <div key={obj.id} className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            {this.handleElement(obj)}
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
        return(
            <div className="container-fluid">
            <div className="row">
                {this.handleData()}
            </div>
        </div>
        );
    }
}