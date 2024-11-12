import React, { useEffect, useState } from "react";
import ProducItem from "../ProductItem/ProductItem";
import PropTypes from "prop-types";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener productos desde una API
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products'); // Aquí puedes cambiar la URL a tu API si usas una propia
      if (!response.ok) {
        throw new Error("Error al obtener los productos");
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect para ejecutar la función al cargar el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products.map((product) => (
        <ProducItem
          key={product.id}
          name={product.title}
          type={product.category}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductsList;

