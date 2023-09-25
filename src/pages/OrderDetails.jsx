import CustomOrderProductCard from '@/components/cards/CustomOrderProductCard';
import CustomTimeLine from '@/components/partials/CustomTimeLine';
import CustomCurrencyDisplay from '@/components/shared/CustomCurrencyDisplay';
import { orderService } from '@/services';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function OrderDetails() {
    const [isLoading, setLoading] = useState(false);
    const [orderData, setOrderData] = useState(null);
    const { order_uuid } = useParams();

    const handleGetOrderByUuid = async (order_uuid) => {
        try {
            setLoading(true);
            const response = await orderService.getOneOrderByUuidService(order_uuid);
            if (response) {
                const { code, message, result } = response;
                if (code === 'SUCCESS') {
                    setOrderData(result);
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleGetOrderByUuid(order_uuid);
    }, [order_uuid]);

    const items = [
        {
            name: 'vong tay',
            imageUrl: 'https://meta.vn/Data/image/2021/04/05/hoa-bi-ngan-la-hoa-gi-2.jpg',
            color: 'red',
            quantity: 7,
        },
        {
            name: 'vong tay',
            imageUrl: 'https://meta.vn/Data/image/2021/04/05/hoa-bi-ngan-la-hoa-gi-2.jpg',
            color: 'red',
            quantity: 78,
        },
        {
            name: 'vong tay',
            imageUrl: 'https://meta.vn/Data/image/2021/04/05/hoa-bi-ngan-la-hoa-gi-2.jpg',
            color: 'red',
            quantity: 78,
        },
        {
            name: 'vong tay',
            imageUrl: 'https://meta.vn/Data/image/2021/04/05/hoa-bi-ngan-la-hoa-gi-2.jpg',
            color: 'red',
            quantity: 78,
        },
        {
            name: 'vong tay',
            imageUrl: 'https://meta.vn/Data/image/2021/04/05/hoa-bi-ngan-la-hoa-gi-2.jpg',
            color: 'red',
            quantity: 78,
        },
    ];

    return (
        <div className="mx-auto my-0 flex w-full max-w-[1440px] flex-col gap-4 bg-transparent px-0 py-4">
            <div className="px-4 py-0 text-[1.8rem] font-semibold md:text-[2.4rem]">
                <p>{`Chi tiết đơn hàng`}</p>
            </div>

            <div className="bg-transparent">
                <div className="p-4">
                    <p className="text-2xl font-semibold">Tình trạng đơn hàng</p>
                    <CustomTimeLine />
                </div>

                <div className="my-4 p-4">
                    <p className="mb-4 text-2xl font-semibold">Danh sách sản phẩm</p>
                    <ul>
                        {items &&
                            items.slice(0, 3).map((item, index) => (
                                <li key={index}>
                                    <CustomOrderProductCard data={item} />
                                </li>
                            ))}
                        {items && items.length > 3 && (
                            <li>
                                <span>Và {items.length - 3} sản phẩm khác</span>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                    <div className="w-full p-4 md:w-[calc(50%_-_8px)]">
                        <p className="mb-4 text-[1.6rem] font-semibold">Địa chỉ nhận hàng</p>
                        {
                            <ul className="flex items-center justify-between text-justify text-sm font-normal">
                                <li>Joh Doe</li>
                                <li>0945421789</li>
                                <li>Tổ 4</li>
                                <li>Tân thịnh - Thái Nguyên</li>
                            </ul>
                        }
                    </div>
                    <div className="w-full p-4 md:w-[calc(50%_-_8px)]">
                        <p className="mb-4 text-[1.6rem] font-semibold">Chi tiết thanh toán</p>
                        {true && (
                            <ul className="mt-2 font-semibold">
                                <li>
                                    <span>Phương thức thanh toán:</span>
                                    <span>{'COD'}</span>
                                </li>
                                <li className="flex gap-4">
                                    <span>Tổng tiền hàng:</span>
                                    <span>
                                        <CustomCurrencyDisplay value={1000} />
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span>Khuyến mãi:</span>
                                    <span>
                                        <CustomCurrencyDisplay value={1000} />
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span>Phí vận chuyển:</span>
                                    <span>
                                        <CustomCurrencyDisplay value={1000} />
                                    </span>
                                </li>
                                <li className="flex gap-4">
                                    <span>Thành tiền:</span>
                                    <span>
                                        <CustomCurrencyDisplay value={1000} />
                                    </span>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetails;
