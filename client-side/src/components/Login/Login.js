import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState(""); // Fixed: Initialize email state
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form refresh

    // Validate input fields
    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      // API call to login endpoint
      const response = await axios.get("http://localhost:3001/login", {
        params: { email, password },
      });

      const user = response.data.user; // Extract user data from the response
      console.log(user);

      if (response.data.success) {
        console.log("Login successful:", user);

        // Navigate to the index page with the user's ID in the URL
        navigate(`/${user._id}`);
      } else {
        setErrorMessage("Invalid login credentials.");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      setErrorMessage(
        error.response?.data?.message || "Invalid email or password."
      );
    }
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
        <Form onSubmit={handleLogin}>
          <h3 className="text-center mb-4" style={{ color: "#6a1b9a" }}>
            Login
          </h3>
          <Form.Group as={Row} className="mb-3" controlId="email">
            <Form.Label column sm={3} style={{ color: "#6a1b9a" }}>
              Email
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="password">
            <Form.Label column sm={3} style={{ color: "#6a1b9a" }}>
              Password
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
              />
            </Col>
          </Form.Group>
          <div className="text-center">
            <Button type="submit" variant="primary">
              Login
            </Button>
          </div>

          <Form.Group as={Row} className="mb-3 mt-4">
            <Col sm={{ span: 10, offset: 3 }}>
              <Link to="/create" className="">
                Sign up instead
              </Link>
            </Col>
          </Form.Group>

          {errorMessage && (
            <p className="text-danger text-center mt-3">{errorMessage}</p>
          )}
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;
