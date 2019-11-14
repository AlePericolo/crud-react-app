import React from 'react';
import DeleteButton from './DeleteButton';
import Title from './common/Title'
import { Link } from 'react-router-dom';

export default class Grid extends React.Component {


    constructor(props){
        super(props)
        console.log(this.props);
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
                <div key={index} className="col-sm-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <RenderContent data={obj} keys={keys}/>
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
                <Title title={'Cars'} />
                <Link to={"/add/"} >Add New Car</Link>
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
    return props.keys.map((key, index) => {
        if(index > 0){
            return (
                <div key={index}>
                    <div className="row">
                        <label className="col-sm-4 text-right">{props.keys[index]}:</label>
                        <HandleContent data={props.data[key]} />
                    </div>
                </div>
            )
        }else{
            return '';
        }
    })
}

const HandleContent = (props) => {
    if(props.data instanceof Array){
        /*return 'a'*/
        console.log(Object.keys(props));
        /*
        props.data.map((obj, index) => {
            
            console.log(obj);
            console.log(index);
            console.log(obj.name);
            return (
                <p key={index}>
                    obj.toString()
                </p>
            );
        })
        */
       return <div className="col-sm-8">aaaaaaaaaaaaaaaa</div>
    }else{
        return <div className="col-sm-8">{props.data}</div>
    }
    
}
