import CustomCheckoutSuccessfullySection from '@/components/layouts/CustomCheckoutSuccessfullySection';

function CheckoutSuccessfully({ successOrderUuid }) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-brown-50 p-4">
            {successOrderUuid && <CustomCheckoutSuccessfullySection order_uuid={successOrderUuid} />}
        </div>
    );
}

export default CheckoutSuccessfully;
