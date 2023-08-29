import Link from "next/link";

const Heading = () => {

    return (
        <div>
            <div className="navbar -py-4 bg-[#322653] px-8 lg:flex">
                <div className="navbar-start">
                    <div className="flex gap-3 ">
                        <h1 className="normal-case text-xs text-white hover:text-[#9288F8]">About us</h1>
                        <h1 className="normal-case text-xs text-white">|</h1>
                        <h1 className="normal-case text-xs text-white hover:text-[#9288F8]">Careers</h1>
                        <h1 className="normal-case text-xs text-white">|</h1>
                        <h1 className="normal-case text-xs text-white hover:text-[#9288F8]">Open a Shop</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <h3 className="normal-case text-sm text-white">Enjoy Free Shipping on Orders Over <span className="text-green-400 text-sm">$75.00</span></h3>
                </div>
                <div className="navbar-end">
                    <h3 className="normal-case text-xs text-white me-3">Need help? Call Us: <span className="text-green-400 text-sm">+8801712-345678</span></h3>
                    <select className="normal-case text-xs text-white bg-transparent">
                        <option className="bg-black" defaultValue="English">English</option>
                        <option className="bg-black" value="Bangla">Bangla</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Heading;