import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SSRComponent extends Component {
    render() {
        return (<div><h1>Server-side Rendering</h1><nav><Link to="/csr">CSR</Link></nav></div>);
    }
}