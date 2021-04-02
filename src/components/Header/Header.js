import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">Early Riders</Link>
                <Button className="navbar-toggler" type="Button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/person/`}>Orders</Link>
                        </li>
                        <li>
                        <Nav className="mr-auto">
                        <NavDropdown title="Admin Panel" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/addProducts">Add Products</NavDropdown.Item>
                            <NavDropdown.Item href="/manageProducts">Manage Products</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                        </li>
                    </ul>
                    <span className="navbar-text">
                    <li style={{listStyle: "none"}} >{user.name || user.email}</li>

      </span>
      {(!user.name && !user.email)&& <Button as={Link} to="/login/" style={{backgroundColor:'black'}}>Login</Button>}
                </div>
            </div>
        </nav>
        </div>
  );
};

export default Header;