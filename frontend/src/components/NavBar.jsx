
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";


const NavBar = () => {
  const { logout, user } = useContext(AuthContext);
  // const [User,setUser]= useState('')
  // useEffect( ()=>{
  //   (async ()=> setUser(user.email))()
  // }),[user]

  const handleLogout = () => {
    logout();
    // setUser(null)
  };
  const style = {
    font: {
      fontFamily: "Maven Pro",
    },
  };
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="border-bottom border-info"
      style={style.font}
    >
      <Container fluid>
        <Navbar.Brand href="#">RioCard+</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Página Princial</Nav.Link>
            <Nav.Link href='/faleconosco'>Fale Conosco</Nav.Link>
            <NavDropdown title="Área do cliente" id="navbarScrollingDropdown">
              <NavDropdown.Item href='/conta' >Minha Conta</NavDropdown.Item>
              <NavDropdown.Item href="/cartoes">Meus Cartões</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>Sair</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link disabled>Gratuidade</Nav.Link>
              {user === null ? (
                <Nav.Link href='/login'>Faça Login</Nav.Link>
              ) : (
                <Nav.Link href='/conta'>{user.nome}</Nav.Link>
              )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

