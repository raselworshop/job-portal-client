import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <>
            <footer className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <img src={logo} alt="" />
                    <p>
                        Job Portal Ltd.
                        <br />
                        Providing reliable jobs since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <div className="grid grid-flow-col items-center justify-center gap-4 my-6">
                <a href="https://facebook.com" className="link link-hover">Facebook</a>
                <a href="https://twitter.com" className="link link-hover">Twitter</a>
                <a href="https://github.com" className="link link-hover">GitHub</a>
            </div>
        </>
    );
};

export default Footer;

{/* <footer className="footer footer-center p-10 bg-gray-800 text-white">
<div>
  <p className="font-bold">MyApp</p>
  <p>&copy; 2024. All Rights Reserved.</p>
</div>

</footer> */}
