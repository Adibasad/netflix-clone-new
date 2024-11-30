import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Dataform() {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();

    // Validate if any field is empty
    if (!uname || !email || !password) {
      setErrorMessage("Please fill in all fields.");
      return; // Prevent form submission if fields are empty
    }

    // If all fields are filled, proceed with form submission
    axios
      .post("http://localhost:3001/createUser", { uname, email, password })
      .then((result) => {
        console.log(result);
        // Clear the error message and navigate to login page (or homepage)
        setErrorMessage("");
        navigate("/login"); // Redirect to login page after successful registration
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Error occurred. Please try again."); // Set general error message
      });
  };

  return (
    <>
      <div
        className="mx-auto mt-4 px-4 py-4 rounded-4 align-middle"
        style={{
          width: "50rem",
          background:
            "linear-gradient(45.8deg, rgb(175, 104, 254) 9.3%, rgb(101, 223, 255) 75.1%)",
        }}
      >
        <Form onSubmit={Submit}>
          <h3 className="text-center mb-4" style={{ color: "#6a1b9a" }}>
            Registration
          </h3>
          <Form.Group as={Row} className="mb-3" controlId="uname">
            <Form.Label column sm={3} style={{ color: "#6a1b9a" }}>
              Name
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="text"
                placeholder="Your Name"
                value={uname}
                onChange={(e) => setUname(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="email">
            <Form.Label column sm={3} style={{ color: "#6a1b9a" }}>
              Email
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="password">
            <Form.Label column sm={3} style={{ color: "#6a1b9a" }}>
              Enter Password
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 3 }}>
              <Button type="submit">Create New Account</Button>
            </Col>
          </Form.Group>
          &nbsp;
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 3 }}>
              <Link to="/login" className="">
                Login Instead
              </Link>
            </Col>
          </Form.Group>
          {errorMessage && (
            <p className="text-danger text-center mt-3">{errorMessage}</p>
          )}
        </Form>
      </div>
    </>
  );
}

export default Dataform;
