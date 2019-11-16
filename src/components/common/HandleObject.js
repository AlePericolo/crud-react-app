import React from 'react'

export default class HandleObject extends React.Component {


    handleElement = (element) => {
        if (typeof (element) === 'object') {
            return <HandleObject data={element} />
        } else {
            return element
        }
    }

    render() {

        const obj = this.props.data;
        const keys = Object.keys(obj);

        return keys.map((key, j) => {
            return (
                /*
                <ul key={j} className="list-group list-group-flush">
                    <li className="list-group-item">
                        <strong>{key}:</strong>
                        {this.handleElement(obj[key])}
                    </li>
                </ul>
                */
                <div key={j} className="container-fluid">
                    <div key={j} className="row border-bottom">

                        <div className="col"><strong>{key}:</strong></div>
                        <div className="col">
                            {this.handleElement(obj[key])}
                        </div>
                    </div>
                </div>
            )
        })
    }
}