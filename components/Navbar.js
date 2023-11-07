// Purpose: Navbar component for personal site
'use client'

import { navLinks } from "./constants/constants";
import { useState } from "react";
import Headroom from 'react-headroom';

export const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <Headroom>
                <div className="w-full flex justify-center top-0 z-20">
                    <div className="navbar bg-neutral mt-3 mb-12 px-12 shadow-xl rounded-full md:w-2/3">
                        <div className="flex-1 mr-4">
                            <a href="/" className="flex items-center gap-2 normal-case text-xl">
                                <img src="/logo.svg" alt='logo' className='w-9 h-9 object-contain' />
                                <p className='text-white text-[18px] font-bold cursor-pointer'>
                                    Aron <span className='sm:block hidden'>| Software Engineer</span>
                                </p>
                            </a>
                        </div>
                        <div className="flex-none">
                            <ul className="menu menu-horizontal px-1 hidden sm:flex felx-row gap-2">
                                {navLinks.map((link) => (
                                    <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'
                                        } font-poppins font-medium cursor-pointer text-[16px]`}
                                        onClick={() => {
                                            setToggle(!toggle);
                                            setActive(link.title);
                                        }}>
                                        <a href={`#${link.id}`}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* for mobile views */}
                        <div className='sm:hidden flex flex-1 justify-end items-center'>
                            {/* <img src={toggle ? '/icons/close.svg' : '/icons/menu.svg'} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => {
                            setToggle(!toggle);
                        }} />
                    <div className={`${!toggle? 'hidden': 'flex'}`}>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] w-52">
                            <li>test</li>
                        </ul>
                    </div> */}
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
                                {navLinks.map((link) => (
                                    <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'
                                        } font-poppins font-medium cursor-pointer text-[16px]`}
                                        onClick={() => {
                                            setToggle(!toggle);
                                            setActive(link.title);
                                        }}>
                                        <a href={`#${link.id}`}>{link.title}</a>
                                    </li>
                                ))}
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </Headroom>


        </>
    )
}
