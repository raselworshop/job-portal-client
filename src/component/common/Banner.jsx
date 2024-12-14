import React from 'react';
import { motion } from "framer-motion";
import teamInspire from '../../assets/team-inspire.jpg';
import teamEnjoy from '../../assets/group-enjoy.jpg';

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="md:hero w-10/12 min-h-96">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-5 md:gap-8 lg:gap-14">
                        <div className='flex-1'>
                            <motion.img
                                src={teamInspire}
                                animate={{y:[50, 100, 50]}}
                                transition={{duration:8, delay:1, repeat: Infinity}}
                                className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-600" />
                            <motion.img
                                src={teamEnjoy}
                                animate={{x:[100, 150, 100]}}
                                transition={{duration:5, delay:1, repeat: Infinity}}
                                className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-600" />
                        </div>
                        <div className='flex-1'>
                            <motion.h1 animate={{ x: [0, 50] }}
                                transition={{ duration: 3, delay: 0.5, ease: "easeInOut", repeat: Infinity }}
                                className="text-2xl md:text-3xl lg:text-5xl font-bold">
                                Latest <motion.span animate={{ color: ["#ffe633", "#33FFe3"] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >Jobs</motion.span> For You!</motion.h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;