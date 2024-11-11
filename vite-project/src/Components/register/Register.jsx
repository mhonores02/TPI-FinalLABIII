import { useState } from "react";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user || !password) {
      setError("Por favor, ingrese su usuario y contraseña.");
    } else {
      console.log("Usuario:", user);
      console.log("Contraseña:", password);
      setError("");
      navigate("/login");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={6} lg={4}>
          <div className="register-card p-5 rounded shadow-lg text-white">
            <h3 className="text-start mb-4">Registro</h3>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="user">Usuario:</Form.Label>
                <Form.Control
                  type="text"
                  id="user"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  required
                  className="register-input"
                />

                <Form.Label htmlFor="password" className="mt-3">
                  Contraseña:
                </Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="register-input"
                />
              </Form.Group>

              {error && <Alert variant="danger">{error}</Alert>}

              <Button variant="primary" type="submit" className="w-100">
                Registrar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
