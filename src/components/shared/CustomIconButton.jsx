import "@/styles/CustomIconButton.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function CustomIconButton({ icon, onClick, to, quantity, className }) {
    if (to) {
        return (
            <Link className={className ? `${className} custom-icon-button` : "custom-icon-button"} to={to}>
                <span className="icon">{icon}</span>
                {quantity && <span className="quantity">{quantity > 9 ? "9+" : quantity}</span>}
            </Link>
        );
    }
    return (
        <div className={className ? `${className} custom-icon-button` : "custom-icon-button"} onClick={onClick}>
            <span className="icon">{icon}</span>
            {quantity && <span className="quantity">{quantity > 9 ? "9+" : quantity}</span>}
        </div>
    );
}

CustomIconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    quantity: PropTypes.number,
    onClick: PropTypes.func,
    to: PropTypes.string,
    className: PropTypes.string,
};

export default CustomIconButton;
