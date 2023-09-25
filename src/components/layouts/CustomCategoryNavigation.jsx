import { Typography } from '@material-tailwind/react';
import CustomCategoryCard from '../cards/CustomCategoryCard';

function CustomCategoryNavigation() {
    const categories = [
        {
            path: '/collection/bracelare',
            title: 'Vòng tay',
            image_url: 'https://www.junie.vn/cdn/shop/files/vong-tay.jpg?v=1684540808&width=500',
        },
        {
            path: '/collection/necklace',
            title: 'Dây chuyền',
            image_url: 'https://www.junie.vn/cdn/shop/files/day-chuyen.jpg?v=1684540701&width=500',
        },
        {
            path: '/collection/earrings',
            title: 'Bông tai',
            image_url:
                'https://www.junie.vn/cdn/shop/files/bong-tai_0c309e72-86e8-412d-af00-d1ddc9fc88d4.jpg?v=1684540671&width=500',
        },
        {
            path: '/collection/ring',
            title: 'Nhẫn',
            image_url:
                'https://www.junie.vn/cdn/shop/files/nhan_852d9375-b273-49f1-92b8-eb71d0342dff.jpg?v=1684540889&width=500',
        },
    ];

    return (
        <div className={'py-8'}>
            <Typography className="text-center text-base font-medium uppercase">
                Mua sắm theo danh mục
            </Typography>

            <div className="mx-auto p-4 mt-8 grid max-w-[1440px] gap-4 md:grid-cols-2 lg:grid-cols-4">
                {categories.map((item, index) => (
                    <CustomCategoryCard
                        key={index}
                        path={item.path}
                        title={item.title}
                        image_url={item.image_url}
                    />
                ))}
            </div>
        </div>
    );
}

export default CustomCategoryNavigation;
