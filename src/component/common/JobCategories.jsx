import React from "react";

const JobCategories = () => {
    const jobCategories = [
        { title: "Marketing & Sale", jobs: 1526, icon: "🛒" },
        { title: "Customer Help", jobs: 185, icon: "🎧" },
        { title: "Finance", jobs: 168, icon: "🏦" },
        { title: "Software", jobs: 1856, icon: "💡" },
        { title: "Human Resource", jobs: 165, icon: "👤" },
    ];

    return (
        <div className=" my-8 bg-gray-100">
            <div className="text-center my-5">
                <h2 className="text-xl md:text-2xl lg:text-3xl">Browse by Category</h2>
                <p>Find a JOB that perct for you! about 800+ new jobs everyday</p>
            </div>
            <div className="flex items-center justify-center">
                <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box">
                    {jobCategories.map((category, index) => (
                        <div
                            key={index}
                            className="carousel-item flex flex-col items-center justify-center border rounded-lg shadow-md p-4 w-56 bg-white hover:shadow-lg transition"
                        >
                            <div className="text-4xl">{category.icon}</div>
                            <h3 className="text-lg font-semibold mt-2">{category.title}</h3>
                            <p className="text-sm text-gray-500">{category.jobs} Jobs Available</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobCategories;
