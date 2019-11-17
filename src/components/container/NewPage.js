import React from 'react';
// Service from '../api/Service';
//import Title from '../common/Title'
import { Link } from 'react-router-dom'
//import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NewPage extends React.Component {

  /*
  constructor(props) {
    super(props);

    
    this.state = {
        id: this.props.match.params.id,
        data: '',
        loadComplete: false
    };
    this.addService = new Service();
    
  }
  */

  save = () => {
    console.log('save');
  }

  render() {

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            {/*<Title title={'New'} />*/}
            <div className="card my-3">
              <div className="card-header bg-dark text-success text-center">
                <h2> New element </h2>
              </div>
              <div className="card-body">
                <div className="container">
                  Form..
                                    </div>
              </div>
              <div className="card-footer bg-dark text-center">
                <Link to="/">
                  <button type="button" className="btn btn-info mx-2" title="Go back">
                    <FontAwesomeIcon icon="arrow-left" size="lg" />
                  </button>
                </Link>
                <button onClick={this.save} className="btn btn-success mx-2" title="Save">
                  <FontAwesomeIcon icon="save" size="lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewPage;