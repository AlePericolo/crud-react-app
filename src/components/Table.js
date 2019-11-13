import React from 'react';

export default class Table extends React.Component {
 
    constructor(props){
        super(props);
        console.log(this.props);
    }
    
    getKeys = function(){
        return Object.keys(this.props.data[0]);
    }
    
    getHeader = function(){
        var keys = this.getKeys();
        return keys.map((key, index)=>{
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }
    
    getRowsData = function(){
        var items = this.props.data;
        var keys = this.getKeys();
        return items.map((row, index)=>{
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
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
    return props.keys.map((key, index)=>{
        console.log(props.keys.length);
        console.log(index);
        if(props.data[key] instanceof Object){
            console.log(props.data[key]);
            return <td key={props.data[key].toString()}> inserire button che apre modale quality </td>
        }else{
            return <td key={props.data[key].toString()}>{props.data[key].toString()}</td>
        }
        if(index === props.keys.length){
            return <td>a</td>
        }
    })
   }