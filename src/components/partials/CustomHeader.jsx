import routes from "@/configs/routes";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

import { Badge, Collapse, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { Navbar, Typography } from "@material-tailwind/react";

function CustomHeader() {
    const menu = [
        {
            content: "Trang chủ",
            path: routes.home,
        },
        {
            content: "Sản phẩm",
            path: routes.collections,
        },
        {
            content: "Bài viết",
            path: routes.blogs,
        },
        {
            content: "Giới thiệu",
            path: routes.about,
        },
        {
            content: "Liên hệ",
            path: routes.contact,
        },
        {
            content: "Đăng nhập",
            path: routes.login,
        },
    ];

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {menu.map((item, index) => (
                <Typography key={index} as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                    <Link to={item.path} className="flex items-center text-base uppercase">
                        {item.content}
                    </Link>
                </Typography>
            ))}
        </ul>
    );

    return (
        <Navbar className="mx-auto py-2 px-4 lg:px-8 lg:py-4 rounded-none w-full">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography as="a" href="#" className="text-xl mr-4 cursor-pointer py-1.5 font-medium">
                    Accessories
                </Typography>
                <div className="flex items-center gap-6">
                    <div className="hidden lg:block">{navList}</div>
                    <div className="flex items-center justify-center">
                        <Badge content={5}>
                            <IconButton variant="text">
                                <ShoppingBagIcon className="h-8 w-8" />
                            </IconButton>
                        </Badge>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto">{navList}</div>
            </Collapse>
        </Navbar>
    );
}

export default CustomHeader;
