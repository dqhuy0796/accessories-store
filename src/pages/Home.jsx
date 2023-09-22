import { useState, useEffect } from "react";
import CustomSlickBanner from "../components/partials/CustomSlickBanner";
import ProductCard from "../components/partials/ProductCard";
import { productService } from "../services";

function Home() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);

    const handleGetProducts = async (categories, page) => {
        const response = await productService.getProductsService(categories, page);
        if (response && response.code === "SUCCESS") {
            const { page, total_pages, total_results, result } = response;
            console.log(response);
            setProducts(result);
            setCurrentPage(Number(page));
            setTotalPages(Number(total_pages));
            setTotalResults(Number(total_results));
        }
    };

    useEffect(() => {
        handleGetProducts("all");
    }, []);

    return (
        <div>
            <CustomSlickBanner />
            <div className="grid grid-cols-6 gap-4">
                {products?.map((item, index) => (
                    <ProductCard  data={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Home;
