import React from 'react';
import DeleteButton from './DeleteButton';


export default class Table extends React.Component {

    getKeys = function () {
        return Object.keys(this.props.data[0]);
    }

    getHeader = function () {
        var keys = this.getKeys();
        return keys.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }

    getRowsData = function () {
        var items = this.props.data;
        var keys = this.getKeys();
        return items.map((obj, index) => {
            return (
                <tr key={index}>
                    <RenderRow key={index} data={obj} keys={keys} />
                    <td>
                        <DeleteButton id={obj.id} />
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {this.getHeader()}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getRowsData()}
                    </tbody>
                </table>
            </div>

        );
    }
}

const RenderRow = (props) => {
    return props.keys.map((key, index) => {
        if (props.data[key] instanceof Object) {
            //console.log(props.data[key]);
            return <td key={props.data[key].toString()}> inserire button che apre modale quality </td>
        } else {
            return <td key={props.data[key].toString()}>{props.data[key].toString()}</td>
        }
    })
}