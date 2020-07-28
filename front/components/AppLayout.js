import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import UserProfile  from './UserProfile';
import LoginForm from "./LoginForm";
import {useSelector} from 'react-redux';

AppLayout.propTypes = {
  children: PropTypes.node
};

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`

function AppLayout({ children }) {
  const { isLoggedIn } = useSelector(state => state.user);

  return (
    <div>
      <Menu mode={"horizontal"}>
        <Menu.Item key="home"><Link href={"/"}><a>NodeBird</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href={"/profile"}><a>Profile</a></Link></Menu.Item>
        <Menu.Item key={"search"}><SearchInput enterButton /></Menu.Item>
        <Menu.Item key="signup"><Link href={"/signup"}><a>Signup</a></Link></Menu.Item>
      </Menu>
      <Row getter={8}>
        <Col getter={4} xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm  />}
        </Col>
        <Col getter={4} xs={24} md={12}>
          {children}
        </Col>
        <Col getter={4} xs={24} md={6}>
          <a href="https://github.com/rednjzz" target="_blank" rel="noreferrer nooppener"> Made by rednjzz</a>
        </Col>
      </Row>
    </div>
  );
}

export default AppLayout;