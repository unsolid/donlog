import React from 'react';
import { Menu } from 'antd';

const NavigationBar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="title">Dongwoo Hong</Menu.Item>
      <Menu.Item key="about">About</Menu.Item>
      <Menu.Item key="blog">Blog</Menu.Item>
      <Menu.Item key="Contact">Contact</Menu.Item>
    </Menu>
  );
};

export default NavigationBar;
