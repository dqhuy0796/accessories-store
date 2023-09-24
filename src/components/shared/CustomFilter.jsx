import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Checkbox,
    Radio,
    Slider,
    Tooltip,
    Typography,
} from '@material-tailwind/react';
import React from 'react';

function CustomFilter({ contents }) {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const Icon = ({ id, open }) => (open === id ? <MinusIcon className="h-5 w-5" /> : <PlusIcon className="h-5 w-5" />);

    return (
        <div className="grid gap-6">
            <h2 className="text-xl font-medium">Bộ lọc</h2>
            {contents && contents.length > 0
                ? contents.map(({ count_by, data }, index) => (
                      <Accordion key={count_by} open={open === index + 1} icon={<Icon id={index + 1} open={open} />}>
                          <AccordionHeader className="text-base capitalize" onClick={() => handleOpen(index + 1)}>
                              {count_by}
                          </AccordionHeader>
                          <AccordionBody className="grid grid-cols-2 gap-y-4 gap-x-2 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-2">
                              {data.map((item, i) => (
                                  <Checkbox
                                      key={i}
                                      value={item.slug ?? item.name}
                                      label={
                                          <Typography className="flex justify-between gap-2 text-sm font-medium">
                                              {item.name}
                                              <strong>{`(${item.product_count})`}</strong>
                                          </Typography>
                                      }
                                      containerProps={{
                                          className: 'p-1',
                                      }}
                                  />
                              ))}
                          </AccordionBody>
                      </Accordion>
                  ))
                : null}
        </div>
    );
}

export default CustomFilter;
