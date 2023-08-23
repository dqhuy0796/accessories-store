/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

//
import styles from "@/styles/CustomSlickBanner.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";

const scss = classNames.bind(styles);

function CustomSlickBanner() {
    const [activeSlide, setActiveSlide] = useState(0);

    const CustomPaging = () => (
        <a className={scss("slick-pagination")}>
            <span>Pagination</span>
        </a>
    );
    const CustomPrevArrow = ({ onClick }) => (
        <button className={scss("custom-prev-arrow")} onClick={onClick}>
            <span></span>
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button className={scss("custom-next-arrow")} onClick={onClick}>
            <span></span>
        </button>
    );

    const Slide = ({ isActive }) => (
        <div className={scss("slide", isActive ? "active" : null)}>
            <img src="https://nilsonline.lk/image/catalog/nils/accessories/accessories.jpg" alt="banner" />
            <div className={scss("content")}>
                <span>Accessory</span> <span>Ahihi</span>
            </div>
        </div>
    );

    const settings = {
        CustomPaging,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "ease-in-out",
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (currentSlide) => {
            setActiveSlide(currentSlide);
        },
    };

    return (
        <div className={scss("container")}>
            <Slider {...settings}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                    <Slide key={index} isActive={activeSlide === index} />
                ))}
            </Slider>
        </div>
    );
}

export default CustomSlickBanner;
