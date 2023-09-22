import { Button, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import Currency from "./Currency";

function ProductCard({ data }) {
    const { name, price, slug, feature_image_url } = data ? data : {} ;
    return (
        <div className="w-full h-full">
            <div className="pt-[calc(100%*4/3)] relative overflow-hidden group">
                <div className="p-3 transition-all translate-y-full group-hover:translate-y-0 duration-300 ease-in-out">
                    <Button variant="gradient" color="white" fullWidth className="p-8 text-lg border-none rounded">
                        Them +
                    </Button>
                </div>
                <div className="absolute inset-0 -z-10 overflow-hidden rounded-md ">
                    <img className="w-full h-full object-cover" src={feature_image_url} />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 p-4">
                <Typography className="text-xl">{name}</Typography>
                <Currency className={"text-red-500"} value={price} />
            </div>
        </div>
    );
}

ProductCard.defaultProps = {
    data: {
        name: "Bông tai Elvira",
        slug: "Bông tai Elvira",
        price: 260000,
        feature_image_url: "https://www.junie.vn/cdn/shop/files/20230613_094724_022.jpg?v=1687331176&width=300",

    },
};

ProductCard.propTypes = {
    data: PropTypes.object,
};

export default ProductCard;
