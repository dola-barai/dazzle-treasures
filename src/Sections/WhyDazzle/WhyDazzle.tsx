import Image from "next/image";

const WhyDazzle = () => {
    return (
        <div>
            <div className=" md:my-20 md:mx-20 py-10 px-10"
                style={{
                    backgroundImage: `url('https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg?w=740&t=st=1693132707~exp=1693133307~hmac=5358219ec2033f6ba241ce44298d717a8cf8c72e2028c01a10d1c70da814d1b4')`,
                    backgroundSize: 'cover',
                }}>
                <div className="hero-overlay "></div>
                <h1 className="my-3 text-3xl font-semibold text-center text-white">Why Dazzle Treasures?</h1>
                <div className="hero-content text-center text-white">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="card w-72 bg-transparent">
                            <figure className="px-2 pt-2">
                                <Image
                                    src="https://img.freepik.com/free-vector/stack-money-gold-coins-3d-cartoon-style-icon-coins-with-dollar-sign-wad-cash-currency-flat-vector-illustration-wealth-investment-success-savings-economy-profit-concept_74855-26108.jpg?w=740&t=st=1693129194~exp=1693129794~hmac=91518fb25f31343a38d8ee8daf30e39feaf878fdd632194720d0b84b075e2c01"
                                    className='rounded-lg'
                                    alt="Image"
                                    width={100}
                                    height={100}
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Transparent pricing</h2>
                                <p>No surprises here. See how much you will pay on device you like.</p>
                            </div>
                        </div>
                        <div className="card w-72 bg-transparent">
                            <figure className="px-2 pt-2">
                                <Image
                                    src="https://img.freepik.com/free-vector/drive-thru-sign_23-2148660199.jpg?w=740&t=st=1693129680~exp=1693130280~hmac=5a7add576c0141ecdb65808fbf524c664af8c99eebb04b0e35707da843cfe21b"
                                    className='rounded-lg'
                                    alt="Image"
                                    width={100}
                                    height={100}
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Minutes, not hours</h2>
                                <p>Time saving tools to help you find the right device in a snap.</p>
                            </div>
                        </div>
                        <div className="card w-72 bg-transparent">
                            <figure className="px-2 pt-2">
                                <Image
                                    src="https://img.freepik.com/free-vector/no-time-concept-illustration_114360-4290.jpg?w=740&t=st=1693129998~exp=1693130598~hmac=0d10366e066bc02fdb2f4fedf95923d152bb242448da457aab779010b6ebb5a4"
                                    className='rounded-lg'
                                    alt="Image"
                                    width={100}
                                    height={100}
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shop by Onile</h2>
                                <p>Your own pace, your own space. Shop online where and when it's convenient for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyDazzle;