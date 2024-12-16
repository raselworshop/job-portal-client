import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/UseAuth';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const fetchDataByEmail = async () => {
            try {
                const response = await fetch(`http://localhost:3000/jobs?email=${user?.email}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setJobs(data)
                } else {
                    console.error("Failed to fetch data");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };
        if (user?.email) {
            fetchDataByEmail();
        }
    }, [user?.email])
    return (
        <div>
            <h2 className='text-3xl'>My Posted Jobs: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse">
                    {/* head */}
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border py-2"></th>
                            <th className="border py-2">Job Title</th>
                            <th className="border py-2">Deadline</th>
                            <th className="border py-2">Application Count</th>
                            <th className="border py-2">Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.length > 0 ? (
                            jobs.map((job, index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.appliactionCount}</td>
                                <td>
                                    <Link to={`/recruiter/view-applications/${job._id}`}>
                                        <button className='btn btn-link'>View Applications</button>
                                    </Link>
                                </td>
                            </tr>)
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">No jobs found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;