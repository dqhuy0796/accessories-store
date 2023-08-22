import routes from "@/configs/routes";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//
import styles from "@/styles/Navbar.module.scss";
import classNames from "classnames/bind";

const scss = classNames.bind(styles);
function Navbar({ isOpening }) {
    const menu = [
        {
            content: "Trang chủ",
            path: routes.home,
        },
        {
            content: "Sản phẩm",
            path: routes.collections,
        },
        {
            content: "Bài viết",
            path: routes.blogs,
        },
        {
            content: "Giới thiệu",
            path: routes.about,
        },
        {
            content: "Liên hệ",
            path: routes.contact,
        },
    ];

    return (
        <nav className={scss("navbar", isOpening ? "open" : null)}>
            <ul className={scss("menu")}>
                {menu.map((item, index) => (
                    <li key={index} className={scss("item")}>
                        <Link to={item.path} className={scss("navlink")}>
                            {item.content}
                        </Link>
                    </li>
                ))}
                <li className={scss("item")}>
                    <Link to={routes.login} className={scss("navlink")}>
                        <span>Đăng nhập</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

Navbar.propTypes = {
    isOpening: PropTypes.bool.isRequired,
    onToggleNavbar: PropTypes.func.isRequired,
};

export default Navbar;
