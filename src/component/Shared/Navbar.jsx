import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/authcontext/AuthContext';
import jobsIcon from '../../assets/logo.png'
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    const handleSignOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                signOutUser()
                    .then(() => {
                        Swal.fire({
                            title: "Logged Out!",
                            text: "You're logged out.",
                            icon: "success"
                        });
                        navigate('/')
                    })
                    .catch(error=>{
                        Swal.fire({
                            title: "Error!",
                            text: `${error.message}`,
                            icon: "error"
                          });
                    })
            }
        });
    }
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/myApplications'}>My Application</NavLink></li>
        <li><NavLink to={'/recruiter/add-job'}>Add Job</NavLink></li>
        <li><NavLink to={'/recruiter/posted-job'}>Posted Job</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className='w-12' src={jobsIcon} alt="" />
                    <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Job Portal</h2>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="relative group flex items-center space-x-3">
                        {/* Profile Image */}
                        <div
                            className="relative w-12 h-12 rounded-full border border-gray-300 overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            <img
                                src={user.photo || user.photoURL || 'https://via.placeholder.com/150'}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Hover Info */}
                        {isHover && (
                            <div
                                className="absolute right-0 mt-6 w-60 rounded-md bg-gray-700 p-5 text-white shadow-lg transition-opacity duration-300 ease-in-out hidden group-hover:block"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className='flex justify-center items-center gap-3'>
                                    <div>
                                        <p className="font-bold mb-1">{user.name || user.displayName || "Anonymous"}</p>
                                        <p className="text-sm mb-1">{user.email || "anonymous@gmail.com"}</p>
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={handleSignOut}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                    <img
                                        src={user.photo || user.photoURL || 'https://via.placeholder.com/150'}
                                        alt="Profile"
                                        className="w-12 h-12 object-cover"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ) : <>
                    <Link to={'/register'} className='btn btn-sm btn-outline mr-2'>Register</Link>
                    <Link to={'/signin'}>
                        <button className="btn btn-sm btn-outline">Login</button>
                    </Link>
                </>}
            </div>
        </div>
    );
};

export default Navbar;