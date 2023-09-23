import { productService } from '@/services';
import { Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import CustomProductCard from '../cards/CustomProductCard';

function CustomDiscoverSection() {
    const [products, setProducts] = useState([]);

    const handleGetProducts = async (categories, page) => {
        const response = await productService.getProductsService(categories, page);
        if (response && response.code === 'SUCCESS') {
            setProducts(response.result);
        }
    };

    useEffect(() => {
        handleGetProducts('all');
    }, []);

    return (
        <div className={'py-8'}>
            <Typography className="text-center text-base font-medium uppercase">
                Không thể bỏ qua
            </Typography>

            <div className="mx-auto mt-8 grid max-w-[1440px] gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {products?.map((item, index) => (
                    <CustomProductCard data={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default CustomDiscoverSection;
