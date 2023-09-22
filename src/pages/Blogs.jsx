import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

function Blogs() {
    const data = [
        {
            id: 1,
            imgUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            author: "Jonh Doe",
            desc: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
            btn: "Đọc thêm",
        },
        {
            id: 1,
            imgUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            author: "Jonh Doe",
            desc: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
            btn: "Đọc thêm",
        },
        {
            id: 1,
            imgUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            author: "Jonh Doe",
            desc: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
            btn: "Đọc thêm",
        },
        {
            id: 1,
            imgUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            author: "Jonh Doe",
            desc: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
            btn: "Đọc thêm",
        },
        {
            id: 1,
            imgUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            author: "Jonh Doe",
            desc: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
            btn: "Đọc thêm",
        },
        {
            id: 1,
            imgUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            author: "Jonh Doe",
            desc: "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
            btn: "Đọc thêm",
        },
    ];

    return (
        <div className="">
            <div className="px-6">
                <div className="py-6">
                    <h1 className="text-center font-bold text-4xl py-[16px]">Our Blog</h1>
                    <p className="text-center text-base">
                        We use an agile approach to test assumptions and connect with the needs of your audience early
                        and often.
                    </p>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3 md:gap-10">
                    {data.map((item, index) => (
                        <Card key={index} className="mt-6 w-full">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img src={item.imgUrl} alt={item.author} />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2 text-2xl font-bold">
                                    {item.author}
                                </Typography>
                                <Typography className="text-[#9CA3AF] text-sm">{item.desc}</Typography>
                            </CardBody>
                            <CardFooter>
                                <Button color="blue"  className="px-[6] py-4 text-xs">{item.btn}</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blogs;
