import CustomOrderCard from '@/components/cards/CustomOrderCard';

function Orders() {
    return (
        <div>
            <div className="mx-auto my-0 flex w-full max-w-[1440px] flex-col gap-4 bg-transparent p-4">
                <ul className="grid gap-6">
                    {[1, 2, 3, 4, 5].map((order, index) => (
                        <li key={index} className="mt-4">
                            <CustomOrderCard data={order} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Orders;
