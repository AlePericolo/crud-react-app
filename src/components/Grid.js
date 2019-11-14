import React from 'react';
import Element from './Element';
import DeleteButton from './common/DeleteButton';

export default class Grid extends React.Component {

    constructor(props) {
        super(props)
        //console.log(this.props);
    }

    getKeys = function () {
        return Object.keys(this.props.data[0]);
    }

    getLabel = function () {
        var keys = this.getKeys();
        return keys.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }

    geContent = function () {
        var items = this.props.data;
        var keys = this.getKeys();
        return items.map((obj, index) => {
            return (
                <div key={index} className="col-sm-6 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <RenderContent k={obj.id} data={obj} keys={keys} />
                        </div>
                        <div className="card-footer text-center">
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

const RenderContent = (props) => {
    return <Element key={props.k} element={props.data} keys={props.keys} />
}