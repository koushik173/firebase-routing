import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Navbar.css'

function NavScrollExample() {
  const {user,handleSignOut} = useFirebase()
  return (
    <div className='navContainer'>
    <Navbar bg="light" expand="sm">
      <Container fluid>
        <Navbar.Brand><Link to="/">Simple Register</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav className='navHeaderLink'>
                <Link to="/">Home</Link>
                <Link to="/product">Products</Link>
                <Link to="/order">Order</Link>
                <Link to="/register">Register</Link>
                <Link><span>{user?.displayName && user.displayName}</span></Link>
                {
                  user?.uid? <Link to="/login"> <Button onClick={handleSignOut}>sign out</Button> </Link>:
                  <Link to="/login">Login</Link>
                }
            </Nav>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;