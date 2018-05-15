import React, {Component} from 'react';
import { Menu, Icon, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
// import SiderLink from './slider/SiderLinks';
// import SiderLink from './slider/SiderLinks';
import './slider/sider.css';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Sider } = Layout;

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        className="sider-container"
      >
        <div className="logo sider-logo" > Logo </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="anticon anticon-dashboard" />
            <span>
              <NavLink to='/' className="sider-link"> Dashboard </NavLink>
            </span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="anticon anticon-shopping-cart" />
            <span>
              <NavLink to='/book/new' className="sider-link"> Add Book </NavLink>
            </span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="anticon anticon-user" />
            <span>Logout</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="anticon anticon-user" />
            <span>
              <NavLink to='/login' className="sider-link"> Login </NavLink>
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
