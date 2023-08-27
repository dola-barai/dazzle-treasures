import Image from "next/image";
import Marquee from "react-fast-marquee";
import m1 from './../../../public/m1.png'
import m3 from './../../../public/m3.png'
import m4 from './../../../public/m4.png'
import m5 from './../../../public/m5.png'
import m6 from './../../../public/m6.png'
import m7 from './../../../public/m7.png'

const Sponsor = () => {
    return (
        <div className="my-7 border py-3 border-gray-200 mx-6">
            <Marquee>
                <Image
                    src={m1}
                    alt="Picture of the author"
                    width={120}
                    height={80}
                    className="me-6"
                />
                <Image
                    src={m7}
                    alt="Picture of the author"
                    width={120}
                    height={80}
                    className="me-6"
                />
                <Image
                    src={m3}
                    alt="Picture of the author"
                    width={120}
                    height={80}
                    className="me-6"
                />
                <Image
                    src={m4}
                    alt="Picture of the author"
                    width={120}
                    height={80}
                    className="me-6"
                />
                <Image
                    src={m5}
                    alt="Picture of the author"
                    width={120}
                    height={80}
                    className="me-6"
                />
                <Image
                    src={m6}
                    alt="Picture of the author"
                    width={120}
                    height={80}
                    className="me-6"
                />
                <Image
                    src={m7}
                    alt="Picture of the author"
                    width={120}
                    height={80}
                    className="me-6"
                />
                <Image
                    src={m1}
                    alt="Picture of the author"
                    width={120}
                    height={80}
                    className="me-6"
                />
                <Image
                    src={m4}
                    alt="Picture of the author"
                    width={120}
                    height={80}
                    className="me-6"
                />
                <Image
                    src={m3}
                    alt="Picture of the author"
                    width={120}
                    height={80}
                    className="me-6"
                />
                <Image
                    src={m4}
                    alt="Picture of the author"
                    width={120}
                    height={80}
                    className="me-6"
                />
                <Image
                    src={m5}
                    alt="Picture of the author"
                    width={120}
                    height={80}
                    className="me-6"
                />
                <Image
                    src={m6}
                    alt="Picture of the author"
                    width={120}
                    height={80}
                    className="me-6"
                />
                <Image
                    src={m7}
                    alt="Picture of the author"
                    width={120}
                    height={80}
                    className="me-6"
                />
            </Marquee>
        </div>
    );
};

export default Sponsor;
