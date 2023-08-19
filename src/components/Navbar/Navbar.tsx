import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <div className="w-full z-10 h-16 fixed bg-[#F9FBE7] top-0">
                <div className="container h-full">  
                    <div className="flex justify-between items-center h-full">
                        <h3 className="items-center lg:me-12 lg:ms-24 text-black font-serif">ORU</h3>
                        <ul className="hidden md:flex font-normal text-lg  gap-x-6 text-black">
                            <li className="hover:text-[#FEA1A1]">
                                <Link href="/">
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li className="hover:text-[#FEA1A1]">
                                <Link href="/feature">
                                    <p>Key Features</p>
                                </Link>
                            </li>
                            <li className="hover:text-[#FEA1A1]">
                                <Link href="/about">
                                    <p>About Us</p>
                                </Link>
                            </li>
                            <li className="hover:text-[#FEA1A1]">
                                <Link href="/clients">
                                    <p>Clients</p>
                                </Link>
                            </li>
                            <li className="hover:text-[#FEA1A1]">
                                <Link href="/contact">
                                    <p>Contact</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
