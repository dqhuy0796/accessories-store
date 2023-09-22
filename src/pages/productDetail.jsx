import React from "react";
import ProductCard from "../components/partials/ProductCard";
import {TruckIcon, StarIcon, HandThumbUpIcon, ShieldCheckIcon, SparklesIcon, CheckBadgeIcon, GifIcon, ChartBarIcon} from '@heroicons/react/24/outline'

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Button,
    Carousel,
    Progress,
    Rating,
    Typography,
} from "@material-tailwind/react";


function productDetail() {
    const reservstion = [
        {
            icon: <TruckIcon />,
            text: "Ship COD & FREESHIP đơn hàng từ 150K",
        },
        {
            icon: <StarIcon />,
            text: "Ship COD & FREESHIP đơn hàng từ 150K",
        },
        {
            icon: <HandThumbUpIcon />,
            text: "Ship COD & FREESHIP đơn hàng từ 150K",
        },
        {
            icon: <ShieldCheckIcon />,
            text: "Ship COD & FREESHIP đơn hàng từ 150K",
        },

        {
            icon: <SparklesIcon />,
            text: "Ship COD & FREESHIP đơn hàng từ 150K",
        },
    ];

    const dataCarousel = [
        {
            id: 1,
            imgUrl: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        },
        {
            id: 1,
            imgUrl: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
            id: 1,
            imgUrl: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
    ];

    const productData = {
        name: "Bông tai Jane",
        price: 230000,
        rating: 4,
        category: "Bong tai",
        color: "gold",
        material: "Bac",
        discount: "Ưu đãi hôm nay: GIẢM 10% đơn từ 400K với mã: NEW10",
        quantity: 100,
        sold: 10,
    };

    const dataSuggestion = [
        {
            name: "Bông tai Jane",
            price: 230000,
            rating: 4,
            category: "Bong tai",
            color: "gold",
            material: "Bac",
            discount: "Ưu đãi hôm nay: GIẢM 10% đơn từ 400K với mã: NEW10",
            quantity: 100,
            sold: 10,
        },
        {
            name: "Bông tai Jane",
            price: 230000,
            rating: 4,
            category: "Bong tai",
            color: "gold",
            material: "Bac",
            discount: "Ưu đãi hôm nay: GIẢM 10% đơn từ 400K với mã: NEW10",
            quantity: 100,
            sold: 10,
        },
        {
            name: "Bông tai Jane",
            price: 230000,
            rating: 4,
            category: "Bong tai",
            color: "gold",
            material: "Bac",
            discount: "Ưu đãi hôm nay: GIẢM 10% đơn từ 400K với mã: NEW10",
            quantity: 100,
            sold: 10,
        },
        {
            name: "Bông tai Jane",
            price: 230000,
            rating: 4,
            category: "Bong tai",
            color: "gold",
            material: "Bac",
            discount: "Ưu đãi hôm nay: GIẢM 10% đơn từ 400K với mã: NEW10",
            quantity: 100,
            sold: 10,
        },
        {
            name: "Bông tai Jane",
            price: 230000,
            rating: 4,
            category: "Bong tai",
            color: "gold",
            material: "Bac",
            discount: "Ưu đãi hôm nay: GIẢM 10% đơn từ 400K với mã: NEW10",
            quantity: 100,
            sold: 10,
        },
        {
            name: "Bông tai Jane",
            price: 230000,
            rating: 4,
            category: "Bong tai",
            color: "gold",
            material: "Bac",
            discount: "Ưu đãi hôm nay: GIẢM 10% đơn từ 400K với mã: NEW10",
            quantity: 100,
            sold: 10,
        },
    ];

    const shopData = [
        {
            icon: <TruckIcon />,
            title: "MIỄN PHÍ VẬN CHUYỂN",
            text: "Ship COD & FREESHIP đơn hàng từ 150K",
        },
        {
            icon: <CheckBadgeIcon />,
            title: "ĐẢM BẢO CHÍNH HÃNG",
            text: "Ship COD & FREESHIP đơn hàng từ 150K",
        },
        {
            icon: <GifIcon />,
            title: "TÙY CHỌN HỘP QUÀ",
            text: "Ship COD & FREESHIP đơn hàng từ 150K",
        },
        {
            icon: <ChartBarIcon/>,
            title: "HỖ TRỢ NHIỆT TÌNH",
            text: "Ship COD & FREESHIP đơn hàng từ 150K",
        },
    ];

    const productDesc = [
        {
            id: 1,
            title: 'Mô tả',
            desc: 'Bông tai Jane đính ngọc trai nước ngọt, mang đến vẻ đẹp cao quý, trong sáng và thánhthiện. Sản phẩm được nhiều phái đẹp yêu thích là do nó vừa mang sự nhẹ nhàng, thanh nhã nữ tính vừa mang nét mạnh mẽ, kiêu kỳ. Bông tai Jane sẽ tôn vinh vẻ đẹp thân thiện, dịu dàng, từ đó dễ dàng lấy được thiện cảm từ những người xung quanh cho các cô gái.'
        },
        {
            id: 2,
            title: 'Sử dụng & Bảo quản',
            desc: 'Được làm từ những chất liệu cao cấp và bền bỉ nhưng do đặc tính cơ bản của chất liệu, Junie khuyến khích khách hàng nên tuân theo các nguyên tắc bảo quản trang sức nói chung. Nên tháo trang sức ra trước khi tiếp xúc với bất kỳ môi trường ẩm hoặc ma sát mạnh (vd:rửa tay, đi ngủ, tắm rửa,...) để đảm bảo và duy trì độ bóng của sản phẩm cũng như kéo dài tuổi thọ của sản phẩm.'
        }
    ]

    const { name, price, rating, category, color, material, discount, quantity, sold } = productData;

    const [open, setOpen] = React.useState(0);
    const [rated, setRated] = React.useState(4);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <div className="grid md:grid-cols-2 gap-4 px-6 mt-4">
                <div>
                    <Carousel
                        className="rounded-none"
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                {new Array(length).fill("").map((_, i) => (
                                    <span
                                        key={i}
                                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                            activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                        }`}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        )}
                    >
                        {dataCarousel.map(({ id, imgUrl }) => (
                            <img key={id} src={imgUrl} alt="image 1" className="h-full w-full object-cover" />
                        ))}
                    </Carousel>
                </div>
                <div>
                    <div className="my-6 grid gap-4 grid-cols-3">
                        <h1 className="text-red-600 text-3xl col-span-3">{name}</h1>
                        <Currency className="col-span-3 text-xl" value={price} />
                        <Rating className="col-span-3" value={rating} readonly />
                        <Typography className="text-base">{category}</Typography>
                        {/* <hr className="border-t border-gray-200"></hr> */}
                        <Typography className="">Màu sắc: {color}</Typography>
                        <Typography className="">Chất liệu: {material}</Typography>
                        <Button variant="gradient" color="blue" fullWidth className="col-span-3 p-4 text-xs">
                            Thêm vào giỏ hàng
                        </Button>
                        <div className="col-span-3">
                            {quantity > sold ? (
                                <Typography className="text-green-600">
                                    Còn hàng, dự kiến giao tới trong 1-3 ngày.
                                </Typography>
                            ) : (
                                <Typography className="text-red-600">het hang</Typography>
                            )}
                        </div>
                        <div className="col-span-3 border-dashed border-2  p-4 grid place-items-center bg-orange-50 rounded-lg">
                            <Typography>{discount}</Typography>
                        </div>
                    </div>
                    <ul className="border border-gray-700 rounded-lg p-4 grid gap-3">
                        {reservstion.map((item) => (
                            <li key={item.id} className="list-none flex">
                                <Typography as={"h4"} className="text-lg">
                                    {item.icon}
                                </Typography>
                                <Typography as={"h4"} className="text-sm ml-6">
                                    {item.text}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between">
                        <div>
                            <Button variant="text" className="underline hover:bg-none">
                                Chia sẻ
                            </Button>
                        </div>
                        <div>
                            <Button variant="text" className="underline">
                                Cần trợ giúp?
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-6 mt-2">
                <div>
                    {productDesc.map((item) => (

                    <Accordion key={item.id} open={open === item.id} icon={<Icon id={item.id} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(item.id)}>{item.title}</AccordionHeader>
                        <AccordionBody>
                            <Typography>
                                {item.desc}
                            </Typography>
                           
                        </AccordionBody>
                    </Accordion>
                    ))}
                </div>
                <div className="py-9 px-6">
                    <div className="flex justify-center mb-5">
                        <Typography as={"h2"}>PHẢN HỒI TỪ KHÁCH HÀNG</Typography>
                    </div>
                    <div>
                        <div className="flex flex-col justify-center items-center pt-6 mb-6">
                            <div className="flex items-center gap-2">
                                <Rating value={4} onChange={(value) => setRated(value)} />
                                <Typography color="blue-gray" className="mt-2">
                                    {rated} trên 5 sao
                                </Typography>
                            </div>
                            <div>
                                <Typography>Dựa trên 261 đánh giá</Typography>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-4">
                                <Rating value={5} readonly />
                                <Progress value={95} size="lg" variant="gradient" />
                            </div>
                            <div className="flex items-center gap-4">
                                <Rating value={4} readonly />
                                <Progress value={5} size="lg" variant="gradient" />
                            </div>
                            <div className="flex items-center gap-4">
                                <Rating value={3} readonly />
                                <Progress value={0} size="lg" variant="gradient" />
                            </div>
                            <div className="flex items-center gap-4">
                                <Rating value={2} readonly />
                                <Progress value={0} size="lg" variant="gradient" />
                            </div>
                            <div className="flex items-center gap-4">
                                <Rating value={1} readonly />
                                <Progress value={0} size="lg" variant="gradient" />
                            </div>
                            <div className="flex justify-center">
                                <a href="#buttons-with-link">
                                    <Button variant="text" className="underline">
                                        Xem tất cả đánh giá
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center gap-4 py-4">
                        <Typography as={"h2"}>THAM KHẢO THÊM</Typography>
                        <Typography as={"h3"}>CÓ THỂ BẠN CŨNG THÍCH</Typography>
                    </div>
                    <div className="w-auto">
                        <Carousel transition={{ duration: 2 }} className="rounded">
                            {[1, 2, 3, 4].map((item, index) => (
                                <ProductCard key={index} />
                            ))}
                        </Carousel>
                    </div>
                    <div>
                        <Carousel className="rounded-xl">
                            {shopData.map((item, index) => (
                                <div key={index}>
                                    <Typography>{item.icon}</Typography>
                                    <Typography>{item.title}</Typography>
                                    <Typography>{item.text}</Typography>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
}

export default productDetail;

const Currency = ({ value, className }) => {
    const displayValue = value.toLocaleString("vn-VI", { style: "currency", currency: "VND" });
    return <Typography className={className}>{displayValue}</Typography>;
};

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}
