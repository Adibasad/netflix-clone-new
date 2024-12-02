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

    if (!uname || !email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    axios
      .post("http://localhost:3001/createUser", { uname, email, password })
      .then((result) => {
        console.log(result);
        setErrorMessage("");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Error occurred. Please try again.");
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background:
          "linear-gradient(45.8deg, rgb(175, 104, 254) 9.3%, rgb(101, 223, 255) 75.1%)",
      }}
    >
      <div
        className="mx-auto px-4 py-4 rounded-4"
        style={{
          width: "50rem",
          background: "#ffffff",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Form onSubmit={Submit}>
          <h3 className="text-center mb-4 text-primary">Registration</h3>
          <Form.Group as={Row} className="mb-3" controlId="uname">
            <Form.Label column sm={4} className="text-secondary">
              Name
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                placeholder="Your Name"
                value={uname}
                onChange={(e) => setUname(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="email">
            <Form.Label column sm={4} className="text-secondary">
              Email
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="password">
            <Form.Label column sm={4} className="text-secondary">
              Enter Password
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group className="text-center mb-3">
            <Button type="submit" variant="primary" className="w-50">
              Create New Account
            </Button>
          </Form.Group>
          <Form.Group className="text-center">
            <Link to="/login" className="text-decoration-none text-primary">
              Login Instead
            </Link>
          </Form.Group>
          {errorMessage && (
            <p className="text-danger text-center mt-3">{errorMessage}</p>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Dataform;
