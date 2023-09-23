import { closeCartModal } from '@/redux/actions/cartActions';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Button, Drawer, IconButton, Spinner, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CartModal() {
    const [isLoading, setLoading] = useState(false);
    const { isOpen, quantity, subtotal, items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCloseCartModal = () => {
        dispatch(closeCartModal());
    };

    const handleRedirectToCheckOut = () => {
        dispatch(closeCartModal());
        navigate('/checkout');
    };

    return (
        <Drawer
            placement="right"
            open={isOpen}
            onClose={handleCloseCartModal}
            className="w-[500px] p-4"
        >
            <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                    {`Giỏ hàng (${quantity > 9 ? '9+' : quantity})`}
                </Typography>
                <IconButton variant="text" color="blue-gray" onClick={handleCloseCartModal}>
                    <XMarkIcon className="h-5 w-5" />
                </IconButton>
            </div>
            <ul className="">
                {items.length > 0 &&
                    items.map((item, index) => (
                        <li key={index}>
                            <div className="flex">
                                <Typography>{item.name ?? ''}</Typography>
                                <Typography>{item.price ?? ''}</Typography>
                                <Typography>{item.quantity ?? ''}</Typography>
                            </div>
                        </li>
                    ))}
            </ul>
            <Button
                color="red"
                variant="gradient"
                className="flex items-center justify-center gap-2"
                onClick={handleRedirectToCheckOut}
                fullWidth
            >
                {isLoading ? <Spinner className="h-5 w-5" /> : null}
                <span>Thanh toán</span>
            </Button>
        </Drawer>
    );
}

export default CartModal;
