import React from 'react';
import useAuth from '../Hooks/UseAuth';
import Swal from 'sweetalert2';

const AddJob = () => {
    const { user } = useAuth();
    const handleAddJob = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        // console.log(formData)
        const initData = Object.fromEntries(formData.entries());
        // console.log(initData)
        const { min, max, currency, ...newJob } = initData;
        console.log(newJob)
        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob)

        const result = await Swal.fire({
            title: "Confirm Save?",
            text: "Are you sure you want to add this job?",
            icon: "question",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        })
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            try {
                Swal.fire({
                    title: "Saving...",
                    text: "Please wait while we save the job data.",
                    icon: "info",
                    showConfirmButton: false,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                });

                const response = await fetch('http://localhost:3000/apis/jobs', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newJob)
                });

                const data = await response.json();
                if (data.insertedId) {
                    Swal.close();
                    await Swal.fire(
                        "Saved!",
                        "The job has been added successfully.",
                        "success"
                    );
                    e.target.reset();
                }else{
                    throw new Error("Failed to save the job. Please try again.");
                }
                console.log(data)
            } catch (error) {
                Swal.close()
                console.error("Error adding job:", error);
                await Swal.fire("Error!", "Failed to add the job. Please try again later.", "error");
            }
        } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
        }
    }
    return (
        <div>
            <h2 className="text-3xl">Post a new Job</h2>
            <form onSubmit={handleAddJob} className="card-body">
                {/* Job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job Title" className="input input-bordered" required />
                </div>
                {/* job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" name='location' placeholder="Job Location" className="input input-bordered" required />
                </div>
                {/* job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select defaultValue="Pick a Job type" className="select select-ghost w-full max-w-xs">
                        <option disabled>Pick a Job type</option>
                        <option>Full-time</option>
                        <option>Intern</option>
                        <option>Part-time</option>
                    </select>
                </div>
                {/* job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select defaultValue="Pick a Job Field" className="select select-ghost w-full max-w-xs">
                        <option disabled>Pick a Job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>
                </div>
                {/* salary range */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name='min' placeholder="Min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name='max' placeholder="Max " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <select defaultValue="Currency" name="currency" className="select select-ghost w-full max-w-xs">
                            <option disabled>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                </div>
                {/* Job Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Job Description" name="description" required></textarea>
                </div>
                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name='company' placeholder="Company Name" className="input input-bordered" required />
                </div>
                {/* requirements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="put each requirements in a new line" name="requirements" required></textarea>
                </div>
                {/* responsibilities */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Write each responsibility in a new line" name="responsibilities" required></textarea>
                </div>
                {/* HR Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name='hr_name' placeholder="HR Name" className="input input-bordered" required />
                </div>

                {/* HR Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} name='hr_email' placeholder="HR Email" className="input input-bordered" required />
                </div>
                {/* application Deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="date" name='applicationDeadline' placeholder="Deadline" className="input input-bordered" required />
                </div>
                {/* HR Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo URL</span>
                    </label>
                    <input type="text" name='company_logo' placeholder="Company Logo URL" className="input input-bordered" required />
                </div>
                {/* submit button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;