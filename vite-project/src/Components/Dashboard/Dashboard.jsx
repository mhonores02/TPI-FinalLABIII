import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import ProductsList from "../ProductsList/ProductsList";
/* import CartHeader from "../Cart/CartHeader"; */
/* import ProductListCart from "../Cart/ProductListCart"; */
import LogoPastasHolores from "../../img/LogoPastasHolores.png";
import SearchBar from "../searchBar/SearchBar";
import Products from "../data/data";

const Dashboard = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState(Products);

  const logOutHandler = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleSearch = (term, category) => {
    const filtered = Products.filter((product) => {
      const matchesCategory =
        category === "Todas" ||
        product.category.toLowerCase() === category.toLowerCase();
      const matchesSearchTerm =
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.type.toLowerCase().includes(term.toLowerCase());

      return matchesCategory && matchesSearchTerm;
    });
    setFilteredProducts(filtered);
  };

  return (
    <Container>
      <Row className="justify-content-end mt-3">
        <Col xs="auto">
          <Button variant="primary" onClick={logOutHandler}>
            Cerrar Sesión
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-center my-4">
        <Col xs="auto">
          <img
            src={LogoPastasHolores}
            className="rounded"
            alt="Logo Pastas Holores"
            width="400px"
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs="auto">
          <h1 style={{ color: "rgb(0, 51, 102)" }}>Nuestros productos</h1>
        </Col>
      </Row>

      <Row className="justify-content-center my-4">
        <Col xs="auto">
          <SearchBar onSearch={handleSearch} />
        </Col>
      </Row>

      <Row className="justify-content-center my-3">
        <Col xs="auto">{/* <CartHeader /> */}</Col>
      </Row>

      <Row className="justify-content-center my-4">
        <Col xs="auto">{/*  <ProductListCart /> */}</Col>
      </Row>

      <Row className="d-flex flex-row flex-wrap justify-content-center">
        <ProductsList products={filteredProducts} />
      </Row>
    </Container>
  );
};

Dashboard.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Dashboard;
