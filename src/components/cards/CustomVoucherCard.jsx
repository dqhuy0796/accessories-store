import { Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';

function CustomVoucherCard({ color, discount, condition, border }) {
    const bgs = [
        'bg-red-600',
        'bg-orange-600',
        'bg-blue-600',
        'bg-indigo-600',
        'bg-purple-600',
        'bg-green-600',
    ];

    const randomNumber = Math.floor(Math.random() * bgs.length);

    return (
        <div className={`overflow-hidden py-1.5 ${color}`}>
            <div
                className={`relative flex scale-x-105 flex-col items-center justify-center border-x-[12px] border-dotted border-${border} py-4`}
            >
                <Typography
                    color="white"
                    className="text-center text-base font-semibold line-clamp-1"
                >
                    Nhập mã
                </Typography>
                <Typography
                    color="white"
                    className="text-center text-5xl font-extrabold uppercase line-clamp-1"
                >
                    {discount}
                </Typography>
                <Typography color="white" className="text-center text-sm font-medium line-clamp-1">
                    {condition}
                </Typography>
            </div>
        </div>
    );
}

CustomVoucherCard.propTypes = {
    color: PropTypes.string,
    border: PropTypes.string,
    discount: PropTypes.string,
    condition: PropTypes.string,
};

CustomVoucherCard.defaultProps = {
    color: 'red',
    border: 'white',
    discount: 'NEW10',
    condition: 'Giảm 10% đơn đầu tiên*',
};

export default CustomVoucherCard;
