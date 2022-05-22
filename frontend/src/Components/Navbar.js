import { Tab, Row, Nav, Card } from "react-bootstrap";
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
              {/* <img src={employee} className='w-100' alt="" />             */}
              <Card>
                <Card.Img variant="top" src={employee} className='w-100' alt=""  />
                <Card.Body>
                  <Card.Title>Employee Dashboard</Card.Title>
                  <Card.Text>
                    <h5>Company name : </h5>
                    <p><strong>Activity Type : </strong></p>
                    <p>Address :</p>
                  </Card.Text>
                </Card.Body>
              </Card>
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
