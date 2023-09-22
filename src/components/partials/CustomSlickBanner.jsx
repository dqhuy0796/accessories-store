/* eslint-disable react/prop-types */
import { Carousel, Typography } from "@material-tailwind/react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function CustomSlickBanner() {
    return (
        <div className="bg-orange-50 overflow-hidden">
            <Carousel className="rounded-none">
                {[1, 2, 3, 4].map((item, index) => (
                    <div key={index} className="bg-white relative h-full w-full">
                        <img
                            src="https://nilsonline.lk/image/catalog/nils/accessories/accessories.jpg"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                            <div className="w-3/4 text-center md:w-2/4">
                                <Typography
                                    variant="h1"
                                    color="white"
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                    The Beauty of Nature
                                </Typography>
                                <Typography variant="lead" color="white" className="mb-12 opacity-80">
                                    Accessories
                                </Typography>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default CustomSlickBanner;
