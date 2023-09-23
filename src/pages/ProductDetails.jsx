import { HandThumbUpIcon, ShieldCheckIcon, SparklesIcon, StarIcon, TruckIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';

import CustomDetailsSection, { CustomDetailsSkeleton } from '@/components/layouts/CustomDetailsSection';
import CustomRatingCountSection from '@/components/layouts/CustomRatingCountSection';
import { productService } from '@/services';
import { Accordion, AccordionBody, AccordionHeader, Button, Carousel, Typography } from '@material-tailwind/react';
import { useParams } from 'react-router-dom';
import CustomCarouselProductImages from '@/components/partials/CustomCarouselProductImages';

function ProductDetails() {
    const [isLoading, setLoading] = useState(false);
    const [productData, setProductData] = useState(null);
    const { slug } = useParams();

    const handleGetProductBySlug = async (slug) => {
        setLoading(true);
        const response = await productService.getProductBySlugService(slug);
        if (response && response.code === 'SUCCESS') {
            setProductData(response.result);
        }
        setLoading(false);
    };

    useEffect(() => {
        handleGetProductBySlug(slug);
    }, [slug]);

    const reservation = [
        {
            icon: <TruckIcon className="h-7 w-7" />,
            text: 'Ship COD & FREESHIP đơn hàng từ 150K',
        },
        {
            icon: <StarIcon className="h-7 w-7" />,
            text: 'Bền màu & thân thiện với làn da',
        },
        {
            icon: <HandThumbUpIcon className="h-7 w-7" />,
            text: 'Đảm bảo chính hãng hoặc hoàn tiền tới 300%',
        },
        {
            icon: <ShieldCheckIcon className="h-7 w-7" />,
            text: 'Bảo hành, đổi mới sản phẩm trong 7 ngày',
        },

        {
            icon: <SparklesIcon className="h-7 w-7" />,
            text: '10.000+ khách hàng hài lòng',
        },
    ];

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div>
            <div className="mx-auto grid max-w-[1440px] gap-4 p-4 md:grid-cols-2 md:gap-6 md:p-6 lg:gap-8 xl:gap-12">
                <div className="">
                    {productData ? (
                        <CustomCarouselProductImages images={productData.images} />
                    ) : (
                        <div className="animate-pulse rounded-lg bg-blue-gray-200 pt-[calc(100%)]"></div>
                    )}
                </div>
                <div className="">
                    {productData ? <CustomDetailsSection details={productData} /> : <CustomDetailsSkeleton />}

                    <ul className="grid gap-3 rounded-lg border border-blue-gray-100 p-4">
                        {reservation.map((item, index) => (
                            <li key={index} className="flex list-none">
                                <Typography className="text-sm">{item.icon}</Typography>
                                <Typography className="ml-6 text-xs font-medium text-gray-700 lg:text-base">
                                    {item.text}
                                </Typography>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-between">
                        <div>
                            <Button color="blue" variant="text">
                                Chia sẻ
                            </Button>
                        </div>
                        <div>
                            <Button color="blue" variant="text">
                                Cần trợ giúp?
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto grid max-w-[1440px] gap-6">
                {productData && (
                    <Accordion open={open === 1}>
                        <AccordionHeader className="text-lg" onClick={() => handleOpen(1)}>
                            Chi tiết sản phẩm
                        </AccordionHeader>
                        <AccordionBody>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: productData.description,
                                }}
                            />
                        </AccordionBody>
                    </Accordion>
                )}

                <CustomRatingCountSection />

                {/* <CustomCarouselProducts title={'Có thể bạn cũng thích'} /> */}
            </div>
        </div>
    );
}

export default ProductDetails;
