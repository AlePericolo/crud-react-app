import React from 'react';
import Element from './Element';
import DeleteButton from './common/DeleteButton';
import { Link } from 'react-router-dom';

export default class Grid extends React.Component {

    geContent = function () {
        return this.props.data.map((obj, index) => {
            return (
                <div key={index} className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <Element data={obj} keys={Object.keys(obj)} />
                        </div>
                        <div className="card-footer text-center">
                            <Link to={"/add/"} params={{ id: obj.id }} >
                                <button type="button" className="btn btn-warning mr-2">Edit</button>
                            </Link>
                            <DeleteButton id={obj.id} />
                        </div>
                    </div>
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
