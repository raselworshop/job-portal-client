import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const applications = useLoaderData();
    const [applicationsState, setApplicationsState] = useState(applications);

    const handleStatusUpdate = async (e, id) => {
        const data = {
            status: e.target.value,
        }
        console.log(e.target.value, id)

        try {
            const response = await fetch(`http://localhost:3000/recruiter/view-applications/set-status/${id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                const pData = await response.json();

                if (pData.modifiedCount) {
                    Swal.fire({
                        title: "Status Update Successfull!",
                        text: "You've successfully updates job Application Status.",
                        icon: "success"
                    });
                }
                setApplicationsState((prevApps) =>
                    prevApps.map((app) =>
                        app._id === id ? { ...app, status: e.target.value } : app
                    )
                );
                console.log("Status update successful:", pData);
            } else {
                console.error("Failed to update status:", response.statusText);
            }
        } catch (error) {
            console.error('An error occurred while updating the status:', error);
        }
    }
    return (
        <div>
            <h2 className="text-3xl">Applications for this job: {applications.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applicationsState.map((app, index) => <tr key={app._id}>
                                <th>{index + 1}</th>
                                <td>{app.applicant_email}</td>
                                <td>Quality Control Specialist</td>
                                <td>{app.status || 'Pending'}</td>
                                <td>
                                    <select
                                        onChange={(e) => handleStatusUpdate(e, app._id)}
                                        defaultValue={app.status || 'Change Status'}
                                        className="select select-bordered select-xs w-full max-w-xs">
                                        <option disabled>Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;