import CustomBlogCard from '@/components/cards/CustomBlogCard';

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
        <div>
            <div className="py-6">
                <p className="text-center text-base">
                    We use an agile approach to test assumptions and connect with the needs of your audience early and
                    often.
                </p>
            </div>
            <div className="mx-auto grid w-full max-w-[1440px] gap-4 p-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {data.map((item, index) => (
                    <CustomBlogCard data={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Blogs;
