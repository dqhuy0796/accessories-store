import { Accordion, AccordionBody, AccordionHeader, Radio, Typography } from '@material-tailwind/react';
import { useState } from 'react';

function CustomSelectPaymentMethodCard() {
    const [open, setOpen] = useState(2);

    const handleOpen = (value) => setOpen(value);

    const paymentMethods = [
        {
            id: 1,
            title: 'Thanh toán VISA/MASTERCARD',
            content: 'Chưa hỗ trợ thanh toán bằng VISA/MASTERCARD. Vui lòng chọn hình thức thanh toán khác.',
        },
        {
            id: 2,
            title: 'Thanh toán khi nhận hàng (COD)',
            content: 'Được kiểm tra hàng trước khi thanh toán cho người giao hàng.',
        },
        {
            id: 3,
            title: 'Chuyển khoản ngân hàng',
            content: 'Thông tin chuyển khoản sẽ được hiển thị khi bạn hoàn tất đặt hàng.',
        },
    ];

    return (
        <div className="grid gap-4 p-0">
            <Typography as="h3" className="text-xl font-semibold">
                Thanh toán
            </Typography>

            <Typography className="text-xs">Toàn bộ các giao dịch được bảo mật và mã hóa</Typography>

            <div className="border-t border-blue-gray-100">
                {paymentMethods.map((item) => (
                    <Accordion
                        key={item.id}
                        open={open === item.id}
                        icon={
                            <div className="relative translate-x-3">
                                <Radio
                                    color="blue"
                                    className="h-4 w-4"
                                    readOnly
                                    checked={open === item.id}
                                    icon={<Icon />}
                                />
                            </div>
                        }
                        className={`select-none border border-blue-gray-100 border-t-transparent px-4 ${
                            open === item.id ? 'bg-blue-50/50' : null
                        }`}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(item.id)}
                            className={`border-b-0 text-sm font-semibold transition-none ${
                                open === item.id ? 'text-blue-500' : null
                            }`}
                        >
                            {item.title}
                        </AccordionHeader>
                        <AccordionBody className="pt-0 text-sm font-normal">{item.content}</AccordionBody>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}

export default CustomSelectPaymentMethodCard;

function Icon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-full w-full scale-105"
        >
            <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
            />
        </svg>
    );
}
