import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsBanner from '../component/common/Job-details/DetailsBanner';
import EmploymentInformation from '../component/common/Job-details/EmploymentInfo';
import JobDetailsContent from '../component/common/Job-details/DetailsContent';

const JobDetails = () => {
    const job = useLoaderData();
    // console.log(job)

    return (
        <div className="container mx-auto p-4">
           <section className='mb-10'>
           <DetailsBanner job={job}/>
           </section>
           <section className='mb-10'>
            <EmploymentInformation/>
           </section>
           <section className="mb-10">
            <JobDetailsContent job={job}/>
           </section>
        </div>
    );
};

export default JobDetails;
