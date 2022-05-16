import { Tab, Row,  Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuData from "../MenuData";
import employee from "../employee.jpg";

const Navbar = () => {
  return (
    <>
      <Tab.Container>
        <Row>          
          <div className="w-75 mt-1">
          <div>
            <img src={employee} className='w-100' alt="" />            
          </div>
            <Nav variant="pills" className="flex-column">
            
              {MenuData.map((item) => (
                <Link className="navLink" to={`/${item.slug}`}>
                  <Nav.Link eventKey="first">{item.name}</Nav.Link>
                </Link>
              ))}
            </Nav>
          </div>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Navbar;
