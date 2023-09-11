import Link from "next/link";
import Image from 'next/image'
import logo from './../../../public/logo.png'
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShopping } from 'react-icons/ai';
import { RiLogoutCircleRLine } from 'react-icons/ri'

const Navbar = () => {
    const navOptions = <>
        <li><Link href="/" className="text-slate-500 hover:text-purple-800">Home</Link></li>
        <li><Link href="/shop" className="text-slate-500 hover:text-purple-800">Shop</Link></li>
        <li><Link href="/" className="text-slate-500 hover:text-purple-800">Pages</Link></li>
        <li><Link href="/" className="text-slate-500 hover:text-purple-800">Blog</Link></li>
        <li><Link href="/" className="text-slate-500 hover:text-purple-800">Contact us</Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Image
                        src={logo}
                        alt="Picture of the author"
                        width={300}
                        height={20}
                    />
                    <div className="form-control ms-4 inline-flex">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 h-[36px] md:w-auto" />

                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                    <AiOutlineShopping className='h-6 w-6 mx-3 text-slate-500'></AiOutlineShopping>
                    <CgProfile className='h-6 w-6 me-3 text-slate-500'></CgProfile>
                    <RiLogoutCircleRLine className='h-6 w-6 me-3 text-slate-500'></RiLogoutCircleRLine>
                </div>
                
            </div>
            <hr />
        </div>
    );
};

export default Navbar;