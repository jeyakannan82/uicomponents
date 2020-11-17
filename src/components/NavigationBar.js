import React from 'react';
import { Nav, Navbar, Form, FormControl, Card , img  } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
  .navbar { background-image: linear-gradient(to right top, #da83ee, #b278db, #8c6cc5, #6960ad, #495293, #3e4883, #333e73, #293463, #2b2c5a, #2c2550, #2b1d47, #2a163d); padding: 2px;}
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .card-title {
    margin-bottom: .75rem;
    text-align: center;
    color: white;
    width: 100%;
}
img {
	vertical-align: left;
    border-style: none;
    width: 75px;
    height: 75px;
}
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
	<img alt="timer" src={require('../img/logo.png')} />

		<Card.Title>Healer</Card.Title>
    </Navbar>
  </Styles>
)