import React, { Component } from 'react';

export class SharedComponent extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.goBack = this.goBack.bind(this);
    }
    goBack(){
        this.props.history.push('/ssr');
    }
    render() {
        return (<div><h1>Client side rendering...</h1><button onClick={this.goBack}>Go back...</button></div>);
    }
}