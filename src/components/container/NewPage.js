import React from 'react';
import Service from '../api/Service';
//import Title from '../common/Title'
import HandleFormNew from '../common/HandleFormNew'
import { Link } from 'react-router-dom'
//import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NewPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: '',
      loadComplete: false
    };
  }

  componentDidMount() {

    this.setState({ loadComplete: true })
    this.setState({
      data: {
        manufacturer: '',
        model: '',
        price: '',
        //quality: [],
        wiki: '',
      }
    })
  }


  save = () => {
    console.log('save');
    console.log(this.state.data);
  }

  render() {

    if (this.state.loadComplete) {
      return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              {/*<Title title={'New'} />*/}
              {/*<form>*/}
              <div className="card my-3">
                <div className="card-header bg-dark text-success text-center">
                  <h2> New element </h2>
                </div>
                <div className="card-body">
                  <div className="container">
                    <HandleFormNew data={this.state.data} />
                  </div>
                </div>
              </div>
              {/*</form>*/}
            </div>
          </div>
        </div>
      )
    } else {
      return ''
    }
  }

}
export default NewPage;