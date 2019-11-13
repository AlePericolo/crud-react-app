import React, { Component } from 'react';
import Service from './Service';
import TableRow from './TableRow';
import Table from './Table';
import {Link} from 'react-router-dom';
 
class ListCar extends Component {
 
    
    constructor(props) {
    super(props);
        this.state = {data: ''};
        this.addService = new Service();
    }

    componentDidMount(){
        Service.getApi('')
        .then(response => {
            //console.log(response);
            this.setState({ data: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    createTable(){
        if(this.state.data instanceof Array){
            return <Table data={this.state.data}/>
        }
    }
    
    
    render() {
    return (
        <div className="container">
        <h3>List of Cars</h3>
            <Link to={"/add/"} >Add New Car</Link>
            {this.createTable()}
        </div>
    );
    }
    /*
    tabRow(){
        if(this.state.items instanceof Array){
            return this.state.items.map(function(object, i){
                console.log(object);
                console.log(i);
                return <TableRow object={object} key={i} />;
            })
        }
    }
    
    
    render() {
    return (
        <div className="container">
        <h3>List of Cars</h3>
            <Link to={"/add/"} >Add New Car</Link>
            <table className="table table-striped">
                <thead>
                <tr>
                    <td>Manufacturer</td>
                    <td>Model</td>
                    <td>Price</td>
                    <td>Quality</td>
                    <td>Wiki</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>
            </table>
        </div>
    );
    }
    */
}
 
export default ListCar;