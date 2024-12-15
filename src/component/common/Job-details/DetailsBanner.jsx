import React from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const DetailsBanner = ({ job }) => {
    const { company_logo } = job;
    return (
        <div className="">
            <div className=" p-4 bg-white shadow-md rounded-lg overflow-hidden">
                <img src={company_logo} alt="Office"
                    className="w-full h-64 object-cover" />
                <div className="p-4 flex flex-wrap items-end justify-between">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">Senior Full Stack Engineer, Creator Success Full Time</h1>
                        <p className="text-gray-600 mb-4">Fulltime 3 mins ago</p>
                    </div>
                    <button className="btn btn-primary"><IoCheckmarkCircleOutline /> Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsBanner;