import React, { Component } from 'react'

import { Layout, Icon } from 'antd'
import Menus from '../menu/menu'

const { Header, Sider, Content } = Layout



function Greeting(props) {
    const isCollapsed = props.isCollapsed;
    if (isCollapsed) {
      return <Icon type="menu-unfold" style={ {fontSize:30,paddingLeft:20}} onClick={props.onClick}/>
    }
    return <Icon type="menu-fold" style={ {fontSize:30,paddingLeft:20}} onClick={props.onClick}/>
}


class Basics extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            isCollapsed: false
        }

        this.cllapesdMenu = this.cllapesdMenu.bind(this)
    }
    cllapesdMenu() {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    render() {
        
        return (
            <Layout>
                <Sider collapsed={this.state.collapsed}><Menus></Menus></Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0,height: 65 }}>
                        <Greeting isCollapsed={false} onClick={this.cllapesdMenu}/>
                    </Header>
                    <Content>Content</Content>
                </Layout>
            </Layout>
        )
    }
}

export default Basics