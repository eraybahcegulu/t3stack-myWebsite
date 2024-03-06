"use client";
import React, { useEffect, useState } from 'react'
import { navItems } from '../constants/nav'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { Drawer } from 'antd';

import { RightCircleOutlined } from '@ant-design/icons';
const Navigation = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    const closeDrawer = () => {
        setOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className=''>
                <ul className='hidden md:flex flex-row gap-10'>
                    {navItems.map(({ path, name }) => (
                        <Link href={path} key={path}>
                            <li className='cursor-pointer'>
                                {name}
                            </li>
                        </Link>
                    ))}
                </ul>
                <span className='md:hidden text-2xl cursor-pointer' onClick={showDrawer}>
                    <FiMenu />
                </span>
            </div>

            <Drawer
                closable={false}
                open={open}
                onClose={closeDrawer}
            >
                <div className='flex flex-col items-center justify-center gap-5'>
                    <span className='flex justify-start w-full ' >
                        <RightCircleOutlined  className='text-2xl cursor-pointer' onClick={closeDrawer}/>
                    </span>
                    <ul className='flex flex-col gap-5 '>
                        {navItems.map(({ path, name }) => (
                            <Link href={path} key={path}>
                                <li className='flex items-center justify-center cursor-pointer text-black hover:bg-gray-100 py-4 px-20 rounded-xl'>
                                    {name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </Drawer>
        </>
    )
}

export default Navigation
