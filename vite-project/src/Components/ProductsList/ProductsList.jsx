import ProducItem from "../ProductItem/ProductItem";
import PropTypes from "prop-types";

const ProductsList = ({ products }) => {
  const ProductsMapped = products.map((product) => (
    <>
      <div className="d-flex justify-content-center">
        <ProducItem
          name={product.name}
          type={product.type}
          price={product.price}
        />
      </div>
    </>
  ));

  return <>{ProductsMapped}</>;
};

ProductsList.propTypes = {
  products: PropTypes.array,
};

export default ProductsList;
