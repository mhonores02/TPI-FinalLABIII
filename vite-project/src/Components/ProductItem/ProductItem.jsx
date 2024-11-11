import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const ProducItem = ({ name, type, price }) => {

    return(
        <>
            <div>
                <Card className="m-3 bd-highlight" style={{ width: "15rem", height: "10rem"}}>
                    <Card.Header className="d-flex justify-content-center">
                        <h5>{name}</h5>
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                        <p>{type}</p>
                        <p>${price}</p>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
};

ProducItem.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.number
};

export default ProducItem;