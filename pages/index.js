import React, { Component } from 'react'
import Layout from '../components/Layout';

class Index extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <h1>Home</h1>
                    <p>listing the toys</p>
                    <p>click on a toy, you should be redirected to Page 2 (toyDetails)</p>

                </div>
            </Layout>
        )
    }
}
export default Index;