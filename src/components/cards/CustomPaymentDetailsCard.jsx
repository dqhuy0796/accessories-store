import { Typography } from '@material-tailwind/react';
import CustomCurrencyDisplay from '../shared/CustomCurrencyDisplay';

function CustomPaymentDetailsCard({ data }) {
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
        <div className="grid gap-2">
            <PaymentRow title={'Tổng tiền sản phẩm'} value={Number(data.subtotal)} />
            <PaymentRow title={'Phí vận chuyển'} value={Number(data.shipping_fee)} />
            <PaymentRow title={'Mã giảm giá'} value={Number(data.discount)} />
            <PaymentRow title={'Thành tiền'} value={Number(data.total)} isTotal />
        </div>
    );
}

CustomPaymentDetailsCard.defaultProps = {
    data: {
        subtotal: 0,
        shipping_fee: 0,
        discount: 0,
        total: 0,
    },
};

export default CustomPaymentDetailsCard;
