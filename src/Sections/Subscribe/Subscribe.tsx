const Subscribe = () => {
    return (
        <div>
            <div className="py-20 bg-sky-700 w-screen">
                <div className="grid grid-cols-2 gap-4">
                    <div className="ms-20">
                        <h3 className="text-4xl font-semibold text-white">Subscrible & Get <span className="text-orange-600">25%</span> Discount</h3>
                        <p className="text-base text-slate-300">Get E-mail updates about our latest shop and special offers.</p>
                    </div>
                    <div className="relative me-20 w-[400px] mt-2">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn bg-orange-600 text-white hover:text-orange-600 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;