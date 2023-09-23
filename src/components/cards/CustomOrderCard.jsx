import { Button, Card, Typography } from '@material-tailwind/react';
import React from 'react';
import CustomCurrencyDisplay from '../shared/CustomCurrencyDisplay';
import CustomOrderProductCard from './CustomOrderProductCard';

function CustomOrderCard() {
    const items = [
        {
            name: 'vong tay',
            feature_image_url: 'https://meta.vn/Data/image/2021/04/05/hoa-bi-ngan-la-hoa-gi-2.jpg',
            price: 100000,
            quantity: 7,
        },
        {
            name: 'vong tay',
            feature_image_url: 'https://meta.vn/Data/image/2021/04/05/hoa-bi-ngan-la-hoa-gi-2.jpg',
            price: 100000,
            quantity: 78,
        },
        {
            name: 'vong tay',
            feature_image_url: 'https://meta.vn/Data/image/2021/04/05/hoa-bi-ngan-la-hoa-gi-2.jpg',
            price: 100000,
            quantity: 78,
        },
        {
            name: 'vong tay',
            feature_image_url: 'https://meta.vn/Data/image/2021/04/05/hoa-bi-ngan-la-hoa-gi-2.jpg',
            price: 100000,
            quantity: 78,
        },
        {
            name: 'vong tay',
            feature_image_url: 'https://meta.vn/Data/image/2021/04/05/hoa-bi-ngan-la-hoa-gi-2.jpg',
            price: 100000,
            quantity: 78,
        },
    ];

    return (
        <Card className="p-4">
            <div className="flex items-center justify-between">
                <Typography className="text-sm font-semibold">Mã đơn</Typography>
                <Typography className="text-sm font-semibold">Thởi gian</Typography>
            </div>
            <ul className="my-4 grid gap-1 border-y md:grid-cols-3 md:gap-3">
                {items.slice(0, 3).map((item, index) => (
                    <li key={index} className="">
                        <CustomOrderProductCard data={item} />
                    </li>
                ))}
                {items.length > 3 && (
                    <li className="border-t py-4 md:col-span-3">
                        <Typography className='text-sm font-medium'>Và {items.length - 3} sản phẩm khác</Typography>
                    </li>
                )}
            </ul>
            <div className="flex items-end justify-between gap-4">
                <Typography className="text-sm font-semibold">Thành tiền:</Typography>
                <CustomCurrencyDisplay className="text-base font-semibold text-red-600" value={12322312} />
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                <Button variant="gradient" size="sm" color="red" fullWidth>
                    <span className="relative top-px">Hủy đơn</span>
                </Button>

                <Button variant="gradient" size="sm" color="green" fullWidth>
                    <span className="relative top-px">Đã nhận hàng</span>
                </Button>

                <Button variant="gradient" size="sm" color="blue" fullWidth>
                    <span className="relative top-px">Chi tiết</span>
                </Button>
            </div>
        </Card>
    );
}

export default CustomOrderCard;
