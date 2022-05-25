import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  Offcanvas,
  FormControl,
} from "react-bootstrap";

const Layout = () => {
  const user = useSelector((state) => state.user);
  let expand = false;
  return (
    <div style={user.userSettings.colorPreference}>
      <Navbar
        key={expand}
        bg="dark"
        variant="dark"
        expand={expand}
        className="mb-3"
      >
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
            style={{
              backgroundColor: "#444",
            }}
          >
            <Offcanvas.Header
              style={{
                backgroundColor: "#222",
                color: "#ffffff",
              }}
              closeButton
            >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Navbar.Brand>FastCRM</Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
