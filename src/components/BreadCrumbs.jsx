import { Breadcrumb } from 'antd';
import React from 'react';

const Crumbs = ({currentPosition}) => (
  <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>{currentPosition}</Breadcrumb.Item>
  </Breadcrumb>
)

export default Crumbs;
