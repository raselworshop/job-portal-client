import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/UseAuth';
import Loading from '../component/Shared/Loading';
import axios from 'axios';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const MyApplication = () => {
    const { user, loading, setLoading } = useAuth();
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);
    const secureAxios = useAxiosSecure();


    useEffect(() => {
        const fetchMyApp = async () => {
            try {
                setLoading(true)
                // const response = await fetch(`http://localhost:3000/user/job-application?email=${user?.email}`)
                // const response =await axios.get(`http://localhost:3000/user/job-application?email=${user?.email}`, {withCredentials:true})
                secureAxios.get(`/user/job-application?email=${user?.email}`)
                .then(response=>{
                    setJobs(response.data)
                })
                // setJobs(response.data)
                // if (response.ok) {
                //     const data = await response.json();
                //     setJobs(response.data)
                // } else {
                //     throw new Error('Failed to fetch job applications');
                // }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false)
            }
        };
        if (user?.email) {
            fetchMyApp();
        }
    }, [user.email, setLoading])

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <div>ERROR: {error}</div>
    }

    return (
        <div>
            <h2 className="text-3xl">My Applications: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map(job => <tr key={job._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.title}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">X</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplication;