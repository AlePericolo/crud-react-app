import React, { Component } from 'react';
import Title from '../common/Title'

class EditPage extends Component {

    render() {

        console.log(this.props)
        const { params } = this.props.match
        console.log(params);

        return (
            <div className="container-fluid">
                <Title title={'Edit'} />
                <h2>{params.id}</h2>
            </div>
        )
      }
}

export default EditPage;