import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Asegúrate de importar PropTypes

const categories = ["Todas", "Pasta", "Bebida", "Salsa"];

const SearchBar = ({ onSearch }) => {
  // Recibimos la prop onSearch desde Dashboard
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Actualizamos los filtros cuando cambian los valores de búsqueda o categoría
  useEffect(() => {
    onSearch(searchTerm, selectedCategory);
  }, [searchTerm, selectedCategory, onSearch]); // Dependencias: se ejecuta cuando cambian los valores

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Actualizamos el término de búsqueda
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value); // Actualizamos la categoría seleccionada
  };

  return (
    <div
      style={{
        margin: "20px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          padding: "10px",
          marginRight: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

// Agregar validación de propTypes para onSearch
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // Especificamos que 'onSearch' debe ser una función requerida
};

export default SearchBar;
