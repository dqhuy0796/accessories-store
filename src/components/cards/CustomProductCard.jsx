import { PlusIcon } from '@heroicons/react/24/solid';
import { Button, Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import CustomCurrencyDisplay from '../shared/CustomCurrencyDisplay';
import { useDispatch } from 'react-redux';
import { cartItemAdd } from '@/redux/actions/cartActions';

export function CustomProductCard({ data, onPreview, onUpdate, onDelete }) {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        const { id, name, slug, feature_image_url, price } = product;
        dispatch(cartItemAdd({ id, name, slug, feature_image_url, price }));
    };

    return data ? (
        <div className="">
            <div className="group relative w-full overflow-hidden pt-[calc(100%*4/3)]">
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-all duration-300 ease-in-out group-hover:translate-y-0">
                    <Button
                        color="white"
                        variant="gradient"
                        className="flex items-center justify-center gap-1 rounded"
                        onClick={() => handleAddToCart(data)}
                        fullWidth
                    >
                        <PlusIcon className="h-4 w-4" />
                        <span className="text-xs font-medium">Thêm vào giỏ</span>
                    </Button>
                </div>
                <div className="absolute inset-0 -z-10 overflow-hidden rounded">
                    <img className="h-full w-full object-cover" src={data.feature_image_url} />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 p-2">
                <Typography className="font-semibold">{data.name}</Typography>
                <CustomCurrencyDisplay
                    className={'text-sm font-normal text-red-500'}
                    value={data.price}
                />
            </div>
        </div>
    ) : (
        <CustomProductCardSkeleton />
    );
}

CustomProductCard.defaultProps = {
    //
};

CustomProductCard.propTypes = {
    data: PropTypes.object,
    onPreview: PropTypes.func,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
};

const CustomProductCardSkeleton = () => {
    const className1 =
        'mb-1 w-[calc(100%-20px)] animate-pulse rounded bg-blue-gray-200 text-[14px] text-transparent';
    const className2 = 'animate-pulse rounded bg-blue-gray-400 text-[10px] text-transparent';
    return (
        <div className="relative flex flex-wrap items-center gap-3 rounded-lg border border-blue-gray-100 p-3 shadow-lg md:flex-nowrap">
            <div className="relative grid w-full grid-cols-4 gap-2 text-blue-gray-500 md:grid-cols-12 md:gap-3">
                <div className="relative row-span-2 pt-[100%] md:col-span-1 md:row-span-1">
                    <div className="absolute inset-0 animate-pulse overflow-hidden rounded bg-blue-gray-200"></div>
                </div>

                <div className="col-span-3 flex flex-col justify-center md:row-span-1">
                    <Typography className={className1}>1</Typography>
                    <Typography className={className2}>2</Typography>
                </div>

                <div className="col-span-3 flex flex-col justify-center md:col-span-2">
                    <Typography className={className1}>1</Typography>
                    <Typography className={className2}>2</Typography>
                </div>

                <div className="col-span-3 flex flex-col justify-center md:col-span-2">
                    <Typography className={className1}>1</Typography>
                    <Typography className={className2}>2</Typography>
                </div>

                {[1, 2, 3].map((item) => (
                    <div key={item} className="flex flex-col justify-center text-center">
                        <Typography className={className1}>1</Typography>
                        <Typography className={className2}>2</Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomProductCard;
