import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image1 from "./avatar-default-icon.png";

function NavbarMenu() {
  const navigate = useNavigate();
  var token = window.localStorage.getItem("token");
  const Logout = () => {
    window.localStorage.removeItem("token");
    localStorage.clear();
    navigate("/pages/Login");
    toast.success("Success", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Nav>
          <Navbar.Brand href="/pages/Home">Home</Navbar.Brand>
        </Nav>
        {!token ? (
          <Container>
            <Nav></Nav>
            <Nav>
              <Nav.Link href="/pages/Login">Login</Nav.Link>
            </Nav>
          </Container>
        ) : (
          <Container>
            <Nav>
              <Nav.Link href="/pages/Product">Products</Nav.Link>
              <Nav.Link href="/pages/Category">Categories</Nav.Link>
            </Nav>
            <Nav>
              <div className="me-auto">
                <div class="dropdown">
                  <a
                    class="btn btn-primary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={image1} width={30} alt="..."></img>
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a class="dropdown-item" href="/pages/Admin">
                        {window.localStorage.getItem("name")}
                      </a>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="btn btn-primary "
                        onClick={Logout}
                      >
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </Nav>
          </Container>
        )}
      </Navbar>
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default NavbarMenu;
