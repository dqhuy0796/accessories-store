import "@/styles/CartModal.css";
import PropTypes from "prop-types";
import { FiX } from "react-icons/fi";
import CustomIconButton from "../shared/CustomIconButton";
function CartModal({ isOpening, onToggleModal }) {
    return (
        <div className={isOpening ? "cart-modal open" : "cart-modal"}>
            <div className="heading">
                <CustomIconButton icon={<FiX />} onClick={onToggleModal} />
            </div>
            <ul className="items"></ul>
            <div className="footer"></div>
        </div>
    );
}

CartModal.propTypes = {
    isOpening: PropTypes.bool.isRequired,
    onToggleModal: PropTypes.func.isRequired,
};

export default CartModal;
