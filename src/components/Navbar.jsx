import React from 'react';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'

const NavbarComponent =() => {
  return (
    <>
      <Navbar className="yellotail">
				<LinkContainer to={'/'}>
					<Navbar.Brand>News-Buzzr</Navbar.Brand>
				</LinkContainer>
			</Navbar>
			<Nav className="mb-4">
				<Nav.Item>
					<LinkContainer to={'/'}>
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer to={'/news/new'}>
						<Nav.Link>New News</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer to={'/contact'}>
						<Nav.Link>Contact</Nav.Link>
					</LinkContainer>
				</Nav.Item>
			</Nav>
    </>
  );
}
// LinkContainer is used to stop reloading of react page

export default NavbarComponent;