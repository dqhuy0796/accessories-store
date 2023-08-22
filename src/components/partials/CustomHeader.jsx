import { useEffect, useState } from "react";
import { FiMenu, FiShoppingBag, FiUser } from "react-icons/fi";
import CustomButton from "../shared/CustomButton";
import CustomIconButton from "../shared/CustomIconButton";
import Navbar from "./Navbar";

import classNames from "classnames/bind";
import styles from "@/styles/CustomHeader.module.scss";

const scss = classNames.bind(styles);

function CustomHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpenNavbar, setOpenNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY >= 40);
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
        <header>
            <div className={scss("topnav", scrolled ? "sticky" : null)}>
                <span>Promotion Information Here</span>
            </div>

            <div className={scss("botnav", scrolled ? "sticky" : null)}>
                <div className={scss("left")}>
                    <div className={scss("hamburger")}>
                        <CustomIconButton icon={<FiMenu />} onClick={handleToggleNavbar} />
                    </div>
                    <Navbar isOpening={isOpenNavbar} onToggleNavbar={handleToggleNavbar} />
                </div>

                <div className={scss("center")}>
                    <div className={scss("logo")}>Acessories</div>
                </div>

                <ul className={scss("right")}>
                    <li className={scss("login")}>
                        <CustomButton content={"Login"} color={"transparent"} icon={<FiUser />} />
                    </li>
                    <li className={scss("cart")}>
                        <CustomIconButton quantity={10} icon={<FiShoppingBag />} />
                    </li>
                </ul>
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
