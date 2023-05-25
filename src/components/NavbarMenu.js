import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarMenu() {
  var token =window.localStorage.getItem("token");
  if (token)  
    console.log(token);
  else  
    console.log('token yok');
  return (
    <>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/pages/Home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/pages/Product">Products</Nav.Link>
            <Nav.Link href="/pages/Category">Categories</Nav.Link>
            {
             !token ?  (<Nav.Link href="/pages/Login">Login</Nav.Link>)   
                    :  (<Nav.Link href="/pages/Admin">Admin</Nav.Link>)
            }
          </Nav>
        </Container>
      </Navbar>


    </>
  );
}

export default NavbarMenu;