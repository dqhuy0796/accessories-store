import CustomBlogCard from '@/components/cards/CustomBlogCard';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react';

function Blogs() {
    const data = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            title: 'Jonh Doe',
            description:
                'Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.',
            route: 'Đọc thêm',
            tag: 'trending',
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            title: 'Jonh Doe',
            description:
                'Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.',
            route: 'Đọc thêm',
            tag: 'trending',
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            title: 'Jonh Doe',
            description:
                'Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.',
            route: 'Đọc thêm',
            tag: 'trending',
        },
        {
            id: 4,
            img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            title: 'Jonh Doe',
            description:
                'Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.',
            route: 'Đọc thêm',
            tag: 'trending',
        },
        {
            id: 5,
            img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            title: 'Jonh Doe',
            description:
                'Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.',
            route: 'Đọc thêm',
            tag: 'trending',
        },
        {
            id: 6,
            img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            title: 'Jonh Doe',
            description:
                'Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.',
            route: 'Đọc thêm',
            tag: 'trending',
        },
    ];

    return (
        <div className="">
            <div className="px-6">
                <div className="py-6">
                    <h1 className="py-[16px] text-center text-4xl font-bold">Our Blog</h1>
                    <p className="text-center text-base">
                        We use an agile approach to test assumptions and connect with the needs of your audience early
                        and often.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
                    {data.map((item, index) => (
                        <CustomBlogCard data={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blogs;
