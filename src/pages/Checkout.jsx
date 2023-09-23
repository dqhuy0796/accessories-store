import CustomOrderProductCard from '@/components/cards/CustomOrderProductCard';
import CustomPaymentDetailsCard from '@/components/cards/CustomPaymentDetailsCard';
import CustomSelectPaymentMethodCard from '@/components/cards/CustomSelectPaymentMethodCard';
import CustomShoppingAddressCard from '@/components/cards/CustomShoppingAddressCard';
import CustomVoucherSubmitForm from '@/components/layouts/CustomVoucherSubmitForm';
import CustomAddressSelection from '@/components/partials/CustomAddressSelection';
import CustomCurrencyDisplay from '@/components/shared/CustomCurrencyDisplay';
import { Button, Card, CardBody, Input, Textarea, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Checkout() {
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
    const [shoppingAddress, setShoppingAddress] = useState({});
    const cart = useSelector((state) => state.cart);
    const { isLogged, data: currentUser } = useSelector((state) => state.user);

    const handleOnChangeShoppingAddress = (value) => {
        setShoppingAddress(value);
        console.log(shoppingAddress);
    };

    useEffect(() => {
        if (isLogged) {
            setCustomerPhoneNumber(currentUser.phone_number);
        }
    }, [isLogged]);

    return (
        <div className="mx-auto grid max-w-[1440px] gap-4 bg-brown-50 md:grid-cols-2">
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

                <CustomShoppingAddressCard data={shoppingAddress} onChangeAddress={handleOnChangeShoppingAddress} />

                <CustomSelectPaymentMethodCard />
            </div>

            <div className="flex flex-col gap-4 p-4">
                <CustomPaymentDetailsCard />

                <Button size="lg" variant="gradient" color="red" className="" fullWidth>
                    Hoàn tất đơn hàng
                </Button>
            </div>
        </div>
    );
}

export default Checkout;
