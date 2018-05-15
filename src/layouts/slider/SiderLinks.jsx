import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default SiderLinks = ({name, link}) => {
  return (
    <NavLink to={link} className="sider-link">{name} </NavLink>
  )
}
