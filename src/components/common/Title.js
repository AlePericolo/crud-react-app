import React from 'react';

export default class Title extends React.Component {

    render() {
        return (
            <div className="jumbotron p-2 my-2">
                <div className="container">
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        );
    }
}