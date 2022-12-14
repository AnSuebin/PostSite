import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Heading = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/upload"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                upload
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/list"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                list
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div
    //   style={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     width: '100%',
    //   }}
    // >
    //   <h1>Hello, React!</h1>
    //   <Link to="/">Home</Link>
    //   <Link to="/upload">upload</Link>
    //   <Link to="/list">list</Link>
    // </div>
  )
}

export default Heading
