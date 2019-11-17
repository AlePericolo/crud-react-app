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

  render() {

    if (this.state.loadComplete) {
      return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              {/*<Title title={'New'} />*/}
              <div className="card my-3">
                <div className="card-header bg-dark text-success">
                  <div className="d-flex justify-content-around">
                    <Link to="/">
                      <button type="button" className="btn btn-info mx-2" title="Go back">
                        <FontAwesomeIcon icon="arrow-left" />
                      </button>
                    </Link>
                    <h2> Add new element </h2>
                  </div>
                </div>
                <div className="card-body">
                  <div className="container">
                    <HandleFormNew data={this.state.data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return ''
  }

}
export default NewPage;