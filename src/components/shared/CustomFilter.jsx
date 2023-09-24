import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Radio,
    Slider,
    Tooltip,
    Typography,
} from '@material-tailwind/react';
import React from 'react';

function CustomFilter() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    function Icon({ id, open }) {
        return open === id ? <MinusIcon className="h-5 w-5" /> : <PlusIcon className="h-5 w-5" />;
    }

    return (
        <div className="pl-4">
            <h2 className="mb-4 text-xl font-medium">Bộ lọc</h2>
            <div>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader className="text-base" onClick={() => handleOpen(1)}>
                        Màu sắc
                    </AccordionHeader>
                    <AccordionBody className="flex gap-4">
                        <Tooltip content="Gold">
                            <p className="h-8 w-8 cursor-pointer rounded-full bg-orange-300"></p>
                        </Tooltip>
                        <Tooltip content="Green">
                            <p className="h-8 w-8 cursor-pointer rounded-full bg-green-500"></p>
                        </Tooltip>
                        <Tooltip content="Rose gold">
                            <p className="h-8 w-8 cursor-pointer rounded-full bg-red-500"></p>
                        </Tooltip>
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader className="text-base" onClick={() => handleOpen(2)}>
                        Loại sản phẩm
                    </AccordionHeader>
                    <AccordionBody className="flex flex-col">
                        <Radio name="type" label="Nhẫn" />
                        <Radio name="type" label="Lắc tay" defaultChecked />
                        <Radio name="type" label="Vòng cổ" />
                        <Radio name="type" label="Bông tai" />
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader className="text-base" onClick={() => handleOpen(3)}>
                        giá
                    </AccordionHeader>
                    <AccordionBody className="">
                        <Slider
                            defaultValue={50}
                            barClassName="rounded-none bg-[#ff999a]"
                            thumbClassName="[&::-moz-range-thumb]:rounded-none [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
                            trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-none !bg-[#ff999a]/10 border border-[#ff999a]/20"
                        />
                        <div className="mb-2 mt-4 flex items-center justify-between">
                            <Typography color="blue-gray" variant="h6">
                                Giá:
                            </Typography>
                            <Typography color="blue-gray" variant="h6">
                                {123} đ
                            </Typography>
                        </div>
                    </AccordionBody>
                </Accordion>
            </div>
        </div>
    );
}

export default CustomFilter;
