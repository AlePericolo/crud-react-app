import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Service from './Service';
import { withRouter } from 'react-router';

class TableRow extends Component { 
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        //console.log(this.props.object);
        //console.log(this.props.key);
    }
 
    deleteDocument= () =>{
        Service.deleteApi('/'+this.props.object.id.toString())
        .then(response => {
            console.log(response);
            if(response.status === 200){
                alert('Car deleted successfully!!');
                this.props.history.push('/index')
            }
            else{
                alert('something went wrong!!');
                this.props.history.push('/index')
            }
            }).catch((error)=>{
                console.log("error-----------",error)
        })
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.object.manufacturer.toString()}
                </td>
                <td>
                    {this.props.object.model.toString()}
                </td>
                <td>
                    {this.props.object.price.toString()}
                </td>
                <td>
                    {this.props.object.quality.toString()}
                </td>
                <td>
                    {this.props.object.wiki.toString()}
                </td>
                <td>
                    <Link to={"/edit-document/"} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                <form >
                    <button type="button" onClick={this.deleteDocument} className="btn btn-danger">Delete</button>
                </form>
                </td>
            </tr>
        );
    }
}
 
export default withRouter(TableRow);