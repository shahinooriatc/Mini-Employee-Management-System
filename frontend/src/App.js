import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activity from "./Components/Activity";
import DailyClass from "./Components/DailyClass";
import EmployList from "./Components/EmployList";
import Notfound from "./Components/Notfound.js";
import Navbar from "./Components/Navbar";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Row>
          <Col lg={3}>
            <Navbar />
          </Col>
          <Col lg={9}>
            <Routes>
              <Route path="/" element={<EmployList />} />
              <Route path="/emploay" element={<EmployList />} />
              <Route path="/todayclass" element={<DailyClass />} />
              <Route path="/postactivity" element={<Activity />} />
              <Route path="/*" element={<Notfound />} />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </>
  );
}

export default App;
