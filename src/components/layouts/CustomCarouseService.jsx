import { ChartBarIcon, CheckBadgeIcon, GifIcon, TruckIcon } from '@heroicons/react/24/outline';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { Carousel, IconButton, Typography } from '@material-tailwind/react';
import Slider from 'react-slick';

function CustomCarouseService() {
    const settings = {
        lazyload: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const shopData = [
        {
            icon: <TruckIcon className="h-6 w-6" />,
            title: 'MIỄN PHÍ VẬN CHUYỂN',
            text: 'Ship COD & FREESHIP đơn hàng từ 150K',
        },
        {
            icon: <CheckBadgeIcon className="h-6 w-6" />,
            title: 'ĐẢM BẢO CHÍNH HÃNG',
            text: 'Ship COD & FREESHIP đơn hàng từ 150K',
        },
        {
            icon: <GifIcon className="h-6 w-6" />,
            title: 'TÙY CHỌN HỘP QUÀ',
            text: 'Ship COD & FREESHIP đơn hàng từ 150K',
        },
        {
            icon: <ChartBarIcon className="h-6 w-6" />,
            title: 'HỖ TRỢ NHIỆT TÌNH',
            text: 'Ship COD & FREESHIP đơn hàng từ 150K',
        },
    ];

    return (
        <div className="py-4">
            <Slider {...settings} className="mx-6">
                {shopData.map((item, index) => (
                    <div key={index}>
                        <div
                            className="grid place-items-center gap-4"
                            
                        >
                            <Typography className="">{item.icon}</Typography>
                            <Typography className="text-xs font-bold">{item.title}</Typography>
                            <Typography className="text-xs">{item.text}</Typography>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CustomCarouseService;
