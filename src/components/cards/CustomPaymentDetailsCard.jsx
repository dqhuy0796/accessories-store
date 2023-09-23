import CustomOrderProductCard from '@/components/cards/CustomOrderProductCard';
import CustomVoucherSubmitForm from '@/components/layouts/CustomVoucherSubmitForm';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import CustomCurrencyDisplay from '../shared/CustomCurrencyDisplay';

function CustomPaymentDetailsCard({}) {
    const cart = useSelector((state) => state.cart);

    const PaymentRow = ({ title, value, isTotal }) => (
        <div className="flex items-baseline justify-between gap-4">
            <Typography className="text-sm font-medium text-gray-600 line-clamp-1">{title}:</Typography>
            <CustomCurrencyDisplay
                className={`text-base font-semibold ${isTotal ? 'text-red-600' : null}`}
                value={value}
            />
        </div>
    );

    return (
        <div className="grid gap-4">
            <Typography as="h3" className="text-xl font-semibold">
                Tổng quan đơn hàng
            </Typography>

            <div className="grid gap-2">
                {cart.items.map((item) => (
                    <CustomOrderProductCard key={item.id ?? item.slug} data={item} />
                ))}
            </div>

            <CustomVoucherSubmitForm />

            <div className="grid gap-2">
                <PaymentRow title={'Tổng tiền sản phẩm'} value={100000} />
                <PaymentRow title={'Phí vận chuyển'} value={100000} />
                <PaymentRow title={'Mã giảm giá'} value={100000} />
                <hr className="border-t border-blue-gray-100"></hr>
                <PaymentRow title={'Thành tiền'} value={100000} isTotal />
            </div>
        </div>
    );
}

export default CustomPaymentDetailsCard;
