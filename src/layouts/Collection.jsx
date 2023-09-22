import { useEffect, useState } from "react";
import ProductCard from "../components/partials/ProductCard";
import { productService } from "../services";
import { Select, Option, Radio, Slider, Input } from "@material-tailwind/react";

import { Menu, MenuHandler, MenuList, MenuItem, IconButton, Avatar, Typography } from "@material-tailwind/react";
import { FunnelIcon } from "@heroicons/react/24/outline";

import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function Collection({ category_id }) {
    const [valuePrice, setValuePrice] = useState(50);

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);

    const handleGetProducts = async (categories, page) => {
        const response = await productService.getProductsService(categories, page);
        if (response && response.code === "SUCCESS") {
            const { page, total_pages, total_results, result } = response;
            console.log(response);
            setProducts(result);
            setCurrentPage(Number(page));
            setTotalPages(Number(total_pages));
            setTotalResults(Number(total_results));
        }
    };

    useEffect(() => {
        handleGetProducts("all");
    }, []);

    const dataSelect = [
        {
            id: 1,
            value: "Mới nhất",
        },
        {
            id: 2,
            value: "Được yêu thích nhất",
        },
        {
            id: 3,
            value: "Được mua nhiều nhất",
        },
        {
            id: 4,
            value: "Giá từ cao đến thấp",
        },
        {
            id: 5,
            value: "Giá từ thấp đến cao",
        },
    ];

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

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const SelectFilter = () => (
        <Select label="Sắp xếp theo" className="flex flex-col items-center justify-center">
            {dataSelect.map(({ id, value }) => (
                <Option key={id}>{value}</Option>
            ))}
        </Select>
    );

    const FilterNav = () => (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>Màu sắc</AccordionHeader>
                <AccordionBody className="grid gap-3 grid-cols-4 place-items-center">
                    <p className="cursor-pointer w-8 h-8 rounded-full bg-blue-gray-500"></p>
                    <p className="cursor-pointer w-8 h-8 rounded-full bg-red-500"></p>
                    <p className="cursor-pointer w-8 h-8 rounded-full bg-green-500"></p>
                    <p className="cursor-pointer w-8 h-8 rounded-full bg-pink-500"></p>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>Loại sản phẩm</AccordionHeader>
                <AccordionBody className="grid grid-cols-1">
                    <Radio name="type" label="Nhẫn" />
                    <Radio name="type" label="Bông tai" defaultChecked />
                    <Radio name="type" label="Dây chuyền" />
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>Giá</AccordionHeader>
                <AccordionBody>
                    <Slider
                        defaultValue={valuePrice}
                        className="text-[#2ec947]"
                        barClassName="rounded-none bg-[#2ec946]"
                        thumbClassName="[&::-moz-range-thumb]:rounded-none [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
                        trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-none !bg-[#2ec946]/10 border border-[#2ec946]/20"
                    />
                    <p className="text-right pt-3">{valuePrice} đ</p>
                </AccordionBody>
            </Accordion>
        </>
    );

    return (
        <div className="grid grid-cols-12 gap-4 px-4 mt-6">
            <div className="grid grid-cols-4 lg:col-span-3 gap-4 col-span-full">
                <div className="col-span-3 lg:hidden">
                    <SelectFilter />
                </div>
                <div className="col-span-1 lg:col-span-4 grid place-items-center lg:place-items-start">
                    <div className="flex justify-center w-full md:hidden">
                        <Menu dismiss={true}>
                            <MenuHandler>
                                <IconButton variant="text">icon</IconButton>
                            </MenuHandler>
                            <MenuList className="min-w-max flex flex-col gap-2">
                                <MenuItem className="w-auto">
                                    <FilterNav/>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    <div className="hidden lg:block flex justify-center w-full px-8">
                        <FilterNav/>
                    </div>
                </div>
            </div>
            <div className="col-span-full lg:col-span-9">
                <div className="hidden lg:block">
                    <div className="grid grid-cols-4 gap-4 mb-4">
                        <div className="col-span-3">
                            <p>Các sản phẩm mới</p>
                        </div>
                        <div className="col-span-1">
                            <SelectFilter />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
                    {products?.map((item, index) => (
                        <ProductCard data={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Collection;
