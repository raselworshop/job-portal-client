import React from 'react';
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="hero w-10/12 min-h-96">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className='flex-1'>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            className="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                        <div className='flex-1'>
                            <motion.h1 animate={{x:100}}
                            transition={{ duration: 2, delay: 1, ease: "easeInOut", repeat:Infinity }}
                             className="text-5xl font-bold">Latest Jobs For You!</motion.h1>
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