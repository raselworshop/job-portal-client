import React, { useState } from 'react';
import UseJobs from '../Hooks/UseJobs';
import Loading from '../component/Shared/Loading';
import HotJobCard from '../component/common/HotJobCard';
import { BiSearch } from 'react-icons/bi';

const AllJobs = () => {
    const [sort, setSort] = useState(false)
    const [search, setSearch] = useState("")
    const [minSalary, setMinSalary] = useState('')
    const [maxSalary, setMaxSalary] = useState('')
    const { jobs, loading } = UseJobs(sort, search, minSalary, maxSalary);
    // console.log(sort)
    return (
        <div>
            <h1 className='py-5 text-4xl font-semibold text-center'>All Jobs: '{jobs.length}'</h1>
            <div className="w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center gap-5">
                <button onClick={() => setSort(!sort)} className={`btn btn-neutral ${sort && 'btn-success'}`}>
                    {sort ? "Sorted By Salary" : "Sort By Salary"}
                </button>
                <BiSearch />
                <input type="text"
                    onKeyUp={(e) => setSearch(e.target.value)}
                    className="input w-full max-w-2xl"
                    placeholder='Search Jobs By Location' />
                <div className='space-y-3'>
                    <input type="text"
                        onKeyUp={(e) => setMinSalary(e.target.value)}
                        className="input w-full max-w-xs"
                        placeholder='Search min salary' />
                    <input type="text"
                        onKeyUp={(e) => setMaxSalary(e.target.value)}
                        className="input w-full max-w-xs"
                        placeholder='Search max salary' />
                </div>
            </div>
            {loading ? (<Loading />
            ) : (
                <div>
                    <h2>total jobs : {jobs.length}</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {jobs.map(job => <HotJobCard key={job._id} job={job} />)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllJobs;