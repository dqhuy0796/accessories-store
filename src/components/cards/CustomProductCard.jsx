import { PlusIcon } from '@heroicons/react/24/solid';
import { Button, Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import CustomCurrencyDisplay from '../shared/CustomCurrencyDisplay';
import { useDispatch } from 'react-redux';
import { cartItemAdd } from '@/redux/actions/cartActions';
import { Link } from 'react-router-dom';
import { routes } from '@/routes';

export function CustomProductCard({ data }) {
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
                <Link to={routes.productDetail.replace(':slug', data.slug)}>
                    <Typography className="font-semibold hover:text-blue-600 hover:underline">{data.name}</Typography>
                </Link>
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
        'w-[calc(100%-20px)] animate-pulse rounded bg-blue-gray-200 text-[14px] text-transparent';
    const className2 =
        'w-[calc(100%-20px)] animate-pulse rounded bg-blue-gray-400 text-[10px] text-transparent';
    return (
        <div className="">
            <div className="group relative w-full overflow-hidden pt-[calc(100%*4/3)]">
                <div className="absolute inset-0 -z-10 animate-pulse overflow-hidden rounded bg-blue-gray-200"></div>
            </div>
            <div className="grid place-items-center gap-2 p-2">
                <div className={className1}>1</div>
                <div className={className2}>2</div>
            </div>
        </div>
    );
};

export default CustomProductCard;
