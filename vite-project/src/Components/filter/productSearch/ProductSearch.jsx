import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "50px", height: "50px" }}
            />
            <span>{product.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

SearchBar.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchBar;
