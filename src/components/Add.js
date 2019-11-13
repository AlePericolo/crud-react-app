import React from 'react';
import Service from './Service';
 
class Add extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            manufacturer:'',
            model:'',
            price: ''
        }
    }
    
    addCar=()=>{
        Service.postApi('',
            {
                manufacturer:this.state.manufacturer,
                model:this.state.model,
                price:this.state.price
            }
        )
        .then(json => {
            if(json.data.statusCode===200){
            this.props.history.push('/index')
        }
        else{
            alert('something went wrong!!');
            this.props.history.push('/index')
        }
        })
        .catch((error)=>{
            console.log("error-----------",error)
        })
    }
    
    handleChange= (e)=> {
        this.setState({[e.target.name]:e.target.value});
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Add Car Form</h2>
                <div className="row justify-content-md-center">
                    <div className="col-md-6 col-md-offset-3">
                        <form>
                            <div className="form-group">
                                <label>manufacturer:</label>
                                <input name="manufacturer" type="text" className="form-control" onChange={this.handleChange} value={this.state.manufacturer}></input>
                            </div>
                                
                            <div className="form-group">
                                <label>model:</label>
                                <input name="model" type="text" className="form-control" onChange={this.handleChange} value={this.state.model}></input>
                            </div>
                                
                            <div className="form-group">
                                <label>price:</label>
                                <input name="price" type="text" className="form-control" onChange={this.handleChange} value={this.state.price}></input>
                            </div>
                            
                            <button type="button" onClick={this.addCar} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Add;