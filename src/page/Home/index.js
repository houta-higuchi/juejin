import React from 'react'
import './index.less'
import Head from '../../component/Head'

export default class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <Head/>
                this is home
            </div>
        )
    }
}