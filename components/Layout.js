import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import Head from 'next/head'

export default class Layout extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Head>
                    <title>lolol</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
                </Head>
                <Navbar/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}