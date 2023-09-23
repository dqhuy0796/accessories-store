import { Typography } from '@material-tailwind/react';
import CustomVoucherCard from '../cards/CustomVoucherCard';
import CustomBlogCard from '../cards/CustomBlogCard';

function CustomBlogsSection() {
    const bgColor = 'bg-brown-50';

    return (
        <div className={'py-8 ' + bgColor}>
            <Typography className="text-center text-base font-medium uppercase">
                Xu hướng
            </Typography>

            <div className="mx-auto mt-8 grid max-w-[1440px] gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((item, index) => (
                    <CustomBlogCard key={index} />
                ))}
            </div>
        </div>
    );
}

export default CustomBlogsSection;
