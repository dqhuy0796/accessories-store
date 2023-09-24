import CustomProductCard from '@/components/cards/CustomProductCard';
import CustomFilter from '@/components/shared/CustomFilter';
import { productService } from '@/services';
import { Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Collection() {
    const [isLoading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const { slug } = useParams();

    const defaultArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const handleGetProducts = async (categories, page) => {
        setLoading(true);
        const response = await productService.getProductsService(categories, page);
        if (response && response.code === 'SUCCESS') {
            setProducts(response.result);
        }
        setLoading(false);
    };

    useEffect(() => {
        handleGetProducts(slug);
    }, [slug]);

    return (
        <div className={'py-8'}>
            <Typography className="text-center text-base font-medium uppercase">Sản phẩm</Typography>

            <div className="mx-auto flex max-w-[1440px] flex-wrap gap-4 md:flex-nowrap">
                <div className="w-full pl-4 md:w-max">
                    <CustomFilter />
                </div>
                <div className="grid max-w-[1440px] flex-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {products.length > 0
                        ? products.map((item, index) => <CustomProductCard data={item} key={index} />)
                        : defaultArray.map((item, index) => <CustomProductCard key={index} />)}
                </div>
            </div>
        </div>
    );
}

export default Collection;
