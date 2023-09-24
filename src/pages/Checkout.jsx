import CustomPaymentDetailsCard from '@/components/cards/CustomPaymentDetailsCard';
import CustomSelectPaymentMethodCard from '@/components/cards/CustomSelectPaymentMethodCard';
import CustomShippingAddressCard from '@/components/cards/CustomShippingAddressCard';
import CustomCheckoutSuccessfullySection from '@/components/layouts/CustomCheckoutSuccessfullySection';
import { cartItemRemoveAll } from '@/redux/actions/cartActions';
import { routes } from '@/routes';
import { orderService } from '@/services';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Button, Card, CardBody, Input, Spinner, Textarea, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Checkout() {
    const [isLoading, setLoading] = useState(false);
    const [successOrderUuid, setSuccessOrderUuid] = useState(null);
    const [allowCheckout, setAllowCheckout] = useState(false);
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
    const [shippingAddress, setShippingAddress] = useState({});
    const [orderNote, setOrderNote] = useState('');
    const [paymentMethod, setPaymentMethod] = useState({});
    const [paymentDetails, setPaymentDetails] = useState({});

    const { isLogged, data: currentUser } = useSelector((state) => state.auth);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setPaymentDetails({
            subtotal: cart.subtotal,
            shipping_fee: 0,
            discount: 0,
            total: cart.subtotal,
        });

        return () =>
            setPaymentDetails({
                subtotal: 0,
                shipping_fee: 0,
                discount: 0,
                total: 0,
            });
    }, [cart]);

    useEffect(() => {
        if (isLogged) {
            setCustomerPhoneNumber(currentUser.phone_number);
        }

        return () => setCustomerPhoneNumber('');
    }, [isLogged]);

    useEffect(() => {
        if (cart.quantity > 0) {
            setAllowCheckout(true);
        } else {
            setAllowCheckout(false);
        }

        return () => setAllowCheckout(false);
    }, [cart.quantity]);

    const handleChangeShippingAddress = (value) => {
        setShippingAddress(value);
        console.log(shippingAddress);
    };

    const handleChangePaymentMethod = (value) => {
        setPaymentMethod(value);
        console.log(paymentMethod);
    };

    const handleCheckout = async () => {
        try {
            setLoading(true);
            const response = await orderService.checkoutService({
                customerPhoneNumber,
                shippingAddress,
                paymentMethod,
                paymentDetails,
                note: orderNote,
                items: cart.items,
            });
            if (response) {
                const { code, message, result } = response;
                if (code === 'SUCCESS') {
                    dispatch(cartItemRemoveAll());
                    setSuccessOrderUuid(result);
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-brown-50">
            {successOrderUuid ? (
                <CustomCheckoutSuccessfullySection order_uuid={successOrderUuid} />
            ) : (
                <div className="mx-auto grid min-h-screen max-w-[1440px] gap-4 md:grid-cols-2">
                    <div className="grid w-full gap-4 bg-white p-4">
                        <div className="grid gap-4 p-0">
                            <Typography as="h3" className="text-xl font-semibold">
                                Liên hệ
                            </Typography>

                            <Input
                                size="lg"
                                color="blue"
                                label="Số diện thoại"
                                value={customerPhoneNumber}
                                readOnly={isLogged}
                                onChange={(e) => setCustomerPhoneNumber(e.target.value)}
                            />

                            {!isLogged && (
                                <Typography className="flex items-end">
                                    <span className="text-xs">Bạn đã có tài khoản?</span>
                                    <Link className="text-xs font-medium text-blue-500 underline">Đăng nhập</Link>
                                </Typography>
                            )}
                        </div>

                        <CustomShippingAddressCard
                            data={shippingAddress}
                            onChangeAddress={handleChangeShippingAddress}
                        />

                        <Textarea
                            color="blue"
                            resize={false}
                            label="Lưu ý cho người bán hàng"
                            value={orderNote}
                            onChange={(e) => setOrderNote(e.target.value)}
                        />

                        <CustomSelectPaymentMethodCard onChangePaymentMethod={handleChangePaymentMethod} />
                    </div>

                    <div className="flex flex-col gap-4 p-4">
                        <CustomPaymentDetailsCard data={paymentDetails} />

                        <Button
                            size="lg"
                            variant="gradient"
                            className="flex items-center justify-center gap-2"
                            color="red"
                            disabled={isLoading || !allowCheckout}
                            onClick={handleCheckout}
                            fullWidth
                        >
                            {isLoading && <Spinner className="h-5 w-5" />}
                            Hoàn tất đơn hàng
                        </Button>

                        <Button
                            size="lg"
                            variant="outlined"
                            onClick={() => navigate(routes.collections.replace(':slug', 'all'))}
                            fullWidth
                        >
                            Tiếp tục mua sắm
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Checkout;
