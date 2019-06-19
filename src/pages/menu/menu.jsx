import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link,BrowserRouter as Roter } from 'react-router-dom'
import routes from './config.jsx'

const renderMenuItem = item => (
    <Menu.Item key={item.key}>
        <Link to={item.link}>
            {item.icon && <Icon type={item.icon} />}
            <span className="nav-text">{item.title}</span>
        </Link>
    </Menu.Item>
)

const renderSubMenu = item => (
    <Menu.SubMenu
        key={item.key}
        title={
            <span>
                {item.icon && <Icon type={item.icon} />}
                <span className="nav-text">{item.title}</span>
            </span>
        }>
        {item.child && item.child.map(item => renderMenuItem(item))}
    </Menu.SubMenu>
)


class RenderMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current: ['home']
        }
    }
    componentDidMount() {
        console.log( this.props)
    }

    componentDidUpdate() {
        console.log( this.props)
    }
    render() {
        return (
            <Roter>
                <Menu
                    theme="dark"
                    style={{height: 100+'vh' }}
                    mode="inline"
                    defaultSelectedKeys={this.state.current}>
                        {
                            routes.map( (route) =>
                                route.child? renderSubMenu(route) : renderMenuItem(route)
                            )
                        }
                </Menu>
            </Roter>   
        )
    }
} 



export default RenderMenu