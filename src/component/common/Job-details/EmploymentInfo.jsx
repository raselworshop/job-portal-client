import React from 'react';
import 'tailwindcss/tailwind.css';

const EmploymentInformation = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-2">Employment Information</h2>
      <div className="divider"></div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p><strong>Industry:</strong> Mechanical / Auto / Automotive, Civil / Construction</p>
          <p><strong>Job Level:</strong> Experienced (Non-Manager)</p>
          <p><strong>Salary:</strong> $800 - $1000</p>
          <p><strong>Experience:</strong> 1 - 2 years</p>
        </div>
        <div>
          <p><strong>Job Type:</strong> Permanent</p>
          <p><strong>Deadline:</strong> 10/08/2022</p>
          <p><strong>Updated:</strong> 10/07/2022</p>
          <p><strong>Location:</strong> Dallas, Texas (Remote Friendly)</p>
        </div>
      </div>
    </div>
  );
};

export default EmploymentInformation;
