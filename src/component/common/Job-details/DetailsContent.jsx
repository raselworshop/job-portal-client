import React from 'react';
import 'tailwindcss/tailwind.css';

const JobDetailsContent = () => {
    return (
        <div className="">
            <div className="p-4 bg-white shadow-md rounded-lg mb-4">
                <h2 className="text-xl font-bold mb-2">Welcome to AliStudio Team</h2>
                <p className="text-gray-600 mb-4">
                    The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.
                </p>
                <p className="text-gray-600 mb-4">
                    The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.
                </p>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg mb-4">
                <h3 className="text-lg font-bold mb-2">Essential Knowledge, Skills, and Experience</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                    <li>5+ years of industry experience in interactive design and/or visual design</li>
                    <li>Excellent interpersonal skills</li>
                    <li>Aware of trends in mobile, communications, and collaboration</li>
                    <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                    <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                    <li>History of impacting shipping products with your work</li>
                    <li>A Bachelor's Degree in Design (or related field) or equivalent professional experience</li>
                    <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg mb-4">
                <h3 className="text-lg font-bold mb-2">Preferred Experience</h3>
                <ul className="list-disc list-inside mb-4">
                    <li>Designing user experiences for enterprise software/services</li>
                    <li>Creating and applying established design principles and interaction patterns</li>
                    <li>Aligning or influencing design thinking with teams working in other geographies</li>
                </ul>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg mb-4">
                <h3 className="text-lg font-bold mb-2">Product Designer</h3>
                <p className="text-gray-600 mb-4">
                    Product knowledge: Deeply understand the technology and features of the product area to which you are assigned.
                </p>
                <p className="text-gray-600 mb-4">
                    Research: Provide human and business impact and insights for products.
                </p>
                <p className="text-gray-600 mb-4">
                    Deliverables: Create deliverables for your product area (for example competitive analyses, user flows, low fidelity wireframes, high fidelity mockups, prototypes, etc.) that solve real user problems through the user experience.
                </p>
                <p className="text-gray-600">
                    Communication: Communicate the results of UX activities within your product area to the design team department, cross-functional partners within your product area, and other interested Superformula team members using clear language that simplifies complexity.
                </p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg mb-4 flex justify-between items-center flex-row-reverse">
                <div>
                    <h2 className="text-xl font-bold mb-2">Share This Job</h2>
                    <div className="flex space-x-2">
                        <button className="btn btn-outline btn-primary">Facebook</button>
                        <button className="btn btn-outline btn-primary">Twitter</button>
                        <button className="btn btn-outline btn-primary">LinkedIn</button>
                    </div>
                </div>
                <div className="flex flex-row-reverse space-x-2 gap-2">
                    <button className="btn btn-secondary">Save Job</button>
                    <button className="btn btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsContent;
