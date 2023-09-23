import React from 'react'

function CustomTimeLine() {

    const data = [
        {
            createdAt: 'Thứ 2',
            stateDesc: 'Xác nhận'
        },
        {
            createdAt: 'Thứ 3',
            stateDesc: 'Được gửi'
        },
        {
            createdAt: 'Thứ 4',
            stateDesc: 'Đang giao'
        },
        {
            createdAt: 'Thứ 5',
            stateDesc: 'Đang giao'
        }
    ]


    const TimeNode = ({ data }) => {
        return (
            <li className={`w-3/12 shrink-0 ${data ? "border-t-2 border-solid" : null}`}>
                <div className='flex flex-col items-center text-[1.2rem] pb-5 md:text-[1.4rem] md:font-medium'>
                    <span className='text-sm lg:text-base'>{data ? data.createdAt.slice(0, 10) : 'yyyy-MM-dd'}</span>
                    <span>{data ? data.createdAt.slice(11, 16) : 'hh:mm'}</span>
                </div>
                <div className='flex justify-center relative text-[1.4rem] border-t-gray-600 pt-5 border-t-2 border-solid before:content-[" "] before:absolute before:top-[-15px] before:-translate-x-2/4 before:w-6 before:h-6 before:bg-[color:var(--color-white)] before:border before:border-[color:var(--color-border)] before:rounded-[50%] before:border-solid before:left-2/4 after:content-[" "] after:absolute after:-translate-x-2/4 after:-rotate-45 after:w-2.5 after:h-1.5 after:border-[color:var(--color-white)] after:border-r-[none] after:border-t-[none] after:border-[3px] after:border-solid after:left-2/4 after:-top-2 md:text-[1.6rem] md:font-medium;'>
                    <span className='text-xs lg:text-lg'>{data ? data.stateDesc : 'Đang chờ'}</span>
                </div>
            </li>
        );
    };

    return (
        <ul className='list-none flex items-end justify-between w-full my-4'>
            {data.map((item, index) => (
                <TimeNode key={index} data={item} />
            ))}
            {[1, 2, 3, 4].slice(0, 4 - data.length).map((index) => (
                <TimeNode key={index} />
            ))}
        </ul>
    );
}

export default CustomTimeLine