import React from "react";
import PropTypes from "prop-types";

export const ProductListCart = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const updatedProducts = allProducts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setAllProducts(updatedProducts);
    } else {
      setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    }

    setTotal(total + product.price);
    setCountProducts(countProducts + 1);
  };

  return (
    <div className="container-items">
      {allProducts.length > 0 ? (
        allProducts.map((product) => (
          <div className="item" key={product.id}>
            <figure>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "150px", height: "150px" }}
              />
            </figure>
            <div className="info-product">
              <h2>{product.title}</h2>
              <p className="price">${product.price}</p>
              <button onClick={() => onAddProduct(product)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

ProductListCart.propTypes = {
  allProducts: PropTypes.array.isRequired,
  setAllProducts: PropTypes.func.isRequired,
  countProducts: PropTypes.number.isRequired,
  setCountProducts: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  setTotal: PropTypes.func.isRequired,
};

export default ProductListCart;

