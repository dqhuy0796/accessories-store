import { Typography } from '@material-tailwind/react';
import CustomVoucherCard from '../cards/CustomVoucherCard';

function CustomVouchersSection() {
    const bgColor = 'bg-brown-50';

    const vouchers = [
        {
            color: 'bg-purple-600',
            discount: 'NEW10',
            condition: 'Giảm 10% đơn hàng đầu tiên',
        },
        {
            color: 'bg-blue-600',
            discount: 'YAY15',
            condition: 'Giảm 15% đơn hàng > 500k',
        },
        {
            color: 'bg-orange-600',
            discount: 'WOW20',
            condition: 'Giảm 20% đơn hàng > 1M',
        },
        {
            color: 'bg-red-600',
            discount: 'NEW10',
            condition: 'Giảm 10% đơn hàng đầu tiên',
        },
    ];

    return (
        <div className={'py-8 ' + bgColor}>
            <Typography className="text-center text-base font-medium uppercase">
                Càng mua càng lời
            </Typography>

            <div className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
                {vouchers.map((item, index) => (
                    <CustomVoucherCard
                        key={index}
                        color={item.color}
                        discount={item.discount}
                        condition={item.condition}
                        border={bgColor}
                    />
                ))}
            </div>
        </div>
    );
}

export default CustomVouchersSection;
