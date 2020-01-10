import React from 'react'
import '../common/template/dependencies'

import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Messages from "../common/msg/messages";
import Routes from './routes'

export default props =>(
    <div className="wrapper">
        <Messages />
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
    </div>
)