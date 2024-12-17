import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/authcontext/AuthContext';
import Loading from '../Shared/Loading';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const {loading, setLoading} = useContext(AuthContext)
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://job-portal-server-jet-six.vercel.app/jobs');
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
                const jobsData = await response.json();
                // console.log(jobsData)
                setJobs(jobsData)
            } catch (error) {
                // console.log('error fetching jobs', error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchJobs()
    }, [])

    return (
        <div>
            {loading? (<Loading></Loading>
            ):(
                <div>
                    <h2>total jobs : {jobs.length}</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {jobs.map(job=> <HotJobCard key={job._id} job={job}/>)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default HotJobs;