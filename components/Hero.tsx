import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
    const [text, _] = useTypewriter({
        words: [
            "Sofware Engineer",
            "Full-Stack Developer",
            "Data Analyst",
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <>
            <Image
                src="./avatar.png"
                alt="avatar"
                height={300}
                width={300}
                className="rounded-2xl mx-auto object-cover shadow-2xl w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mb-8"
            />
            <div>
                <h2 className="text-center text-2xl uppercase text-gray-800 dark:text-gray-100 mb-3 tracking-[11px]">Surya Jaya Sai Padala</h2>
                <h1 className="text-center text-5xl lg:text-6xl text-black dark:text-white font-semibold px-10">
                    <span>{text}</span>
                    <Cursor />
                </h1>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="https://drive.google.com/file/d/1BKAZeHuomRUdbUAx91z9KFRdltw-UqB9/view?usp=drive_link"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Resume
                    </a>
                    <a href="#skills" className="flex flex-row justify-center items-center text-base font-semibold leading-7 text-black dark:text-white hover:scale-110 transition duration-100">
                        Explore my skills &nbsp; <FaArrowRight className="inline-block" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Hero;
