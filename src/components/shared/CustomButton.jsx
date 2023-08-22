import "@/styles/CustomButton.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function CustomButton({ content, icon, quantity, onClick, to, className, color, shape }) {
    const classNames = className ? `${className} custom-button` : "custom-button";

    if (to) {
        return (
            <Link className={`${classNames} ${color} ${shape}`} to={to}>
                <span className="text">{content}</span>
                <span className="icon">{icon}</span>
                {quantity && <span className="quantity">{quantity > 9 ? "9+" : quantity}</span>}
            </Link>
        );
    }
    return (
        <div className={`${classNames} ${color} ${shape}`} onClick={onClick}>
            <span className="text">{content}</span>
            <span className="icon">{icon}</span>
            {quantity && <span className="quantity">{quantity > 9 ? "9+" : quantity}</span>}
        </div>
    );
}

CustomButton.propTypes = {
    content: PropTypes.string,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    to: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    shape: PropTypes.string,
    quantity: PropTypes.number,
};

export default CustomButton;
