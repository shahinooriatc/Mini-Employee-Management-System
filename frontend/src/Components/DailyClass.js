import React, { useEffect, useState } from "react";
import { Row, Form, Button, Col, Table } from "react-bootstrap";
import axios from "axios";

const DailyClass = () => {
  const [data, setdata] = useState([]);
  let [batch, setBatch] = useState("");
  let [time, setTime] = useState("");
  let [room, setRoom] = useState("");

  useEffect(() => {
    const emploayeeData = async () => {
      let { data } = await axios.get("http://localhost:8000/dailyclass");
      setdata(data);
    };
    emploayeeData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/dailyclass", {
        batch,
        time,
        room,
      })
      .then(() => {
        setBatch("");
        setTime("");
        setRoom("");
      });
  };

  return (
    <div>
            <h1 className="text-center mt-3">Daily Classes</h1> <hr/>

      <Row>
        <Col className="mx-auto mt-4" lg={10}>
          <Form>
            <Row>
              <Col lg={7}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => setBatch(e.target.value)}
                    value={batch}
                    type="text"
                    placeholder="Batch"
                  />
                </Form.Group>
              </Col>

              <Col lg={7}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
                    type="text"
                    placeholder="Time"
                  />
                </Form.Group>
              </Col>

              <Col lg={7}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    onChange={(e) => setRoom(e.target.value)}
                    value={room}
                    type="text"
                    placeholder="Room"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={7} className="text-center">
                <Button
                  onClick={handleSubmit}
                  variant="primary"
                  type="submit"
                  className="mt-3 py-3"
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={11}>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Batch </th>
                <th>Time</th>
                <th>Room</th>
              </tr>
            </thead>
            {data.map((item) => (
              <tbody>
                <tr>
                  <td>{item.batch}</td>
                  <td>{item.time}</td>
                  <td>{item.room}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default DailyClass;
