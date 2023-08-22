import { useEffect, useState } from "react";
import { FiMenu, FiShoppingBag } from "react-icons/fi";
import CustomIconButton from "../shared/CustomIconButton";
import Navbar from "./Navbar";

import styles from "@/styles/CustomHeader.module.scss";
import classNames from "classnames/bind";

const scss = classNames.bind(styles);

function CustomHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpenNavbar, setOpenNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // useEffect(() => {
    //     const originalOverflow = document.body.style.overflow;
    //     const isMobile = window.innerWidth < 768;

    //     document.body.style.overflow = isOpenNavbar && isMobile ? "hidden" : "auto";

    //     return () => {
    //         document.body.style.overflow = originalOverflow;
    //     };
    // }, [isOpenNavbar]);

    const handleToggleNavbar = () => {
        setOpenNavbar(!isOpenNavbar);
    };

    return (
        <header className={scss("header", scrolled ? "sticky" : null)}>
            <div className={scss("logo")}>Acessories</div>

            <div className={scss("content")}>
                <div className={scss("navbar")}>
                    <Navbar isOpening={isOpenNavbar} onToggleNavbar={handleToggleNavbar} />
                </div>
                <div className={scss("cart")}>
                    <CustomIconButton quantity={10} icon={<FiShoppingBag />} />
                </div>
                <div className={scss("hamburger")}>
                    <CustomIconButton icon={<FiMenu />} onClick={handleToggleNavbar} />
                </div>
            </div>
        </header>
    );
}

export default CustomHeader;

{
    /* <li className={showSearchBar ? "search show" : "search"}>
<input type="text" placeholder="Tìm kiếm sản phẩm..." />
<CustomIconButton icon={<FiSearch />} onClick={handleToggleSearchBar} />
</li> */
}
