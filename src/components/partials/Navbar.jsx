import "@/styles/Navbar.css";
import routes from "@/configs/routes";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FiX, FiUser } from "react-icons/fi";
import CustomButton from "../shared/CustomButton";
import CustomIconButton from "../shared/CustomIconButton";
function Navbar({ isOpening, onToggleNavbar }) {
    const navbar = [
        {
            content: "Trang chủ",
            path: routes.home,
        },
        {
            content: "Sản phẩm",
            path: routes.home,
        },
        {
            content: "Bài viết",
            path: routes.home,
        },
        {
            content: "Giới thiệu",
            path: routes.home,
        },
        {
            content: "Liên hệ",
            path: routes.home,
        },
    ];

    return (
        <nav className={isOpening ? "navbar open" : "navbar"}>
            <ul className="menu">
                <li className="item hidden-on-pc">
                    <CustomIconButton icon={<FiX />} onClick={onToggleNavbar} />

                    <CustomButton content={"Đăng nhập"} icon={<FiUser />} />
                </li>
                {navbar.map((item, index) => (
                    <li key={index} className="item">
                        <Link to={item.path} className="navlink">
                            {item.content}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

Navbar.propTypes = {
    isOpening: PropTypes.bool.isRequired,
    onToggleNavbar: PropTypes.func.isRequired,
};

export default Navbar;
