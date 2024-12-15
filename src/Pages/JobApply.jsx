import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    console.log(id, user)

    const submitJobApplication = async (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedIn, github, resume, 'job applied')


        const jobApplication = {
            job_id: id,
            applicant_email: user?.email,
            linkedIn,
            github,
            resume,
        }
        try {
            const response = await fetch('http://localhost:3000/job-applications', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(jobApplication)
            })
            const result = await response.json();
            if (response.ok) {
                Swal.fire({
                    title: "Application Successfull!",
                    text: "You've successfully submitted your job Application.",
                    icon: "success"
                });
                console.log("Job application submitted successfully", result);
            } else {
                Swal.fire({
                    title: "Error!",
                    text: `${result.message}`,
                    icon: "error"
                });
                console.error("Error submitting job application", result.message);
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: `${error.message}`,
                icon: "error"
            });
            console.error('An error occurred while submitting the job application:', error);
        }
    }
    return (
        <div className="card bg-base-100 w-full shadow-2xl">
            <h1 className="text-5xl font-bold text-center">Apply Job and Good Luck!</h1>
            <form onSubmit={submitJobApplication} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn URL</span>
                    </label>
                    <input type="url" name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github URL</span>
                    </label>
                    <input type="url" name='github' placeholder="Github URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;