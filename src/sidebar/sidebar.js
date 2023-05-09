import {
   
    FaRegEdit,
    FaBookReader,
    FaLink,
   

} from "react-icons/fa";
import { NavLink, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Sidebar({ children }) {

    const menuItem = [
        {
            path: "/url/short",
            name: "Dashboard",
            icon: <FaBookReader />
        },
        {
            path: "/url/list",
            name: "Url List",
            icon: <FaRegEdit />
        }
    ]
    return (
        <div className="sid-container">

            <div className="sidebar">
                <div className="top_section">
                    <div className="icon"><FaLink /></div>
                    <div className="link d-none d-sm-inline">Url</div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link text-deactron" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="ms-3 d-none d-sm-inline">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>

            <main>
                <NavScrollExample />
                {children}
                <Footer />
            </main>

        </div>
    );
};

export default Sidebar;

export function NavScrollExample({ title }) {
    const history = useHistory()
    const logout = () => {
    localStorage.removeItem('token');
   history.push('/login');
  };
  
    return (
        <div>
            <Navbar className="nav-clr" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className="title">{title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <button  className="nav-btn-clr" class="btn me-2" type="button" onClick={() => history.push("/")}>Home</button>
                            <button  className="nav-btn-clr" class="btn me-2" type="button" onClick={() => history.push("/url/list")}>URL List</button>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button class="btn btn-outline-warning me-2">Search</Button>
                        </Form>
                        <button className="nav-btn-clr" class="btn me-2" type="button" onClick={() => history.push("/login")}>Login</button>
                        <button className="nav-btn-clr" class="btn me-2" type="button" conClick={logout}>logout</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export function Footer() {
    return (
        <div>
            <footer>
                contact us
                <div>email : Ragulurlshortener23@gmail.com</div>
                <div>phone : 9788652355</div>
            </footer>
        </div>
    )
}