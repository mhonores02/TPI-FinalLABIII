import { Card, Button, Form, FormGroup, Row, Col } from "react-bootstrap";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import LogoPastasHolores from "../../img/LogoPastasHolores.png";

const Login = ({ onLogin }) => {
  const [loginWindow, setLoginWindow] = useState(false);

  const navigate = useNavigate();

  const clickLogin = () => {
    setLoginWindow(!loginWindow);
  };

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const emailHandler = (event) => {
    setErrors({ ...errors, email: false });
    setEnteredEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setErrors({ ...errors, password: false });
    setEnteredPassword(event.target.value);
  };

  const submitLogin = (event) => {
    event.preventDefault();
    if (emailRef.current.value.length === 0) {
      emailRef.current.focus();
      setErrors({ ...errors, email: true });
      return;
    }
    if (passwordRef.current.value.length === 0) {
      passwordRef.current.focus();
      setErrors({ ...errors, password: true });
      return;
    }

    alert(
      "El mail ingresado es: " +
        enteredEmail +
        " y la contraseña ingresada es: " +
        enteredPassword
    );

    onLogin();
    navigate("/");

    setEnteredEmail("");
    setEnteredPassword("");
  };

  const handleRegisterRedirect = () => {
    navigate("/register"); // Redirige al formulario de registro
  };

  return (
    <>
      <div className="text-center">
        <img
          src={LogoPastasHolores}
          className="rounded"
          alt="..."
          width="600px"
        />
      </div>
      <div className="text-center">
        <div className="mt-3 d-flex justify-content-center">
          {loginWindow ? (
            ""
          ) : (
            <div>
              <Button
                className="btn-oval mb-2"
                style={{ padding: "10px 150px" }}
                onClick={clickLogin}
              >
                <h3>Login</h3>
              </Button>
            </div>
          )}
        </div>
        {loginWindow ? (
          <Card className="p-3 shadow bg-light">
            <Card.Body>
              <Row className="mb-3">
                <h4>Bienvenido a</h4>
                <h3>Pastas Holores</h3>
              </Row>
              <Form onSubmit={submitLogin}>
                <FormGroup className="mb-4">
                  <Form.Control
                    className={errors.email && "border border-danger"}
                    type="email"
                    ref={emailRef}
                    placeholder="Ingresar email"
                    onChange={emailHandler}
                    value={enteredEmail}
                  />
                </FormGroup>
                <FormGroup className="mb-4">
                  <Form.Control
                    className={errors.password && "border border-danger"}
                    type="password"
                    ref={passwordRef}
                    placeholder="Ingresar contraseña"
                    onChange={passwordHandler}
                    value={enteredPassword}
                  />
                </FormGroup>
                <p className="text-warning">
                  {errors.email || errors.password
                    ? "Debe completar todos los campos para iniciar sesión."
                    : ""}
                </p>
                <Row>
                  <Col>
                    <Button
                      variant="link"
                      onClick={handleRegisterRedirect}
                      className="text-decoration-none"
                    >
                      ¿No tienes cuenta? Regístrate
                    </Button>
                  </Col>
                  <Col md={6} className="d-flex justify-content-end">
                    <Button variant="secondary" type="submit">
                      Iniciar sesión
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func,
};

export default Login;
