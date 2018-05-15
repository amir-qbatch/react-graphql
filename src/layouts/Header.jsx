import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import './header/header.css';

export default class Head extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { Header } = Layout;
    const { collapsed, toggle } = this.props;

    return (
      <Header className="header-container">
        <Icon
          className="trigger header-collapse"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
      </Header>
    );
  };
};