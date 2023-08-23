import { useEffect, useState } from "react";
import { FiMenu, FiShoppingBag } from "react-icons/fi";
import CustomIconButton from "../shared/CustomIconButton";
import routes from "@/configs/routes";
import Navbar from "./Navbar";

import styles from "@/styles/CustomHeader.module.scss";
import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";

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

    const isHomepage = useLocation().pathname === routes.home;

    return (
        <header className={scss("header", isHomepage ? "transparent" : null, scrolled ? "sticky" : null)}>
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
