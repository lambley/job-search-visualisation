import { Nav, Navbar, Container } from 'react-bootstrap';

const NavMain = () => {
  return (
    <Navbar sticky="top" bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/logo192.png"
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Job Search Visualisation
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="diagram">Diagram</Nav.Link>
            <Nav.Link href="list">List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMain;
