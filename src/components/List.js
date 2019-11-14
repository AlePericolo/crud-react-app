import React, { Component } from 'react';

class Item extends React.Component {
    render() {
        return <li>
            {this.props.name}
            {this.props.children}
        </li>
    }
}

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }

    getKeys = function () {
        return Object.keys(this.props.data[0]);
    }

    list(data) {
        console.log(data);
        const children = (items) => {
            if (items) {
                console.log(items);
                return <ul>{this.list(items)}</ul>
            }
        }

        return data.map((node, index) => {
            //console.log(node);
            //console.log(index);
            var keys = this.getKeys();
            console.log(keys);
            return keys.map((obj, index) => {
                console.log(node);
                return (
                    <Item key={index} obj={node}>
                        {children(node[obj])}
                    </Item>
                )
            })

        })
    }

    render() {
        return <ul>
            {this.list(this.props.data)}
        </ul>
    }
}