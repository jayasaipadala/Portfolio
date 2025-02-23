import { FaArrowRight } from "react-icons/fa";

import Achievement from "~/components/Achievement";

const achievements = [
    {
        "Title": "Best Employee Award - Tata Consultancy Services (TCS)",
        "Description": "Recognized as the Best Employee for outstanding performance and dedication at TCS. Acknowledged for delivering high-quality solutions, collaborating effectively with teams, and consistently contributing to project success and organizational growth.",
        "Date": "April 2024",
    },
    {
        "Title": "Outstanding Student Achiever - Lakireddy Bali Reddy College of Engineering (LBRCE)",
        "Description": "Recognized as an Outstanding Student Achiever for excellence in academics, technical skills, and leadership. Acknowledged for consistently delivering innovative solutions, excelling in projects, and actively contributing to college events and competitions.",
        "Date": "August 2021",
    },
    
];

const Achievements = () => {
    return (
        <>
            <h3 className="uppercase tracking-[11px] text-center font-semibold text-gray-800 dark:text-gray-100 text-2xl pl-[11px] mb-9">
                Achievements
            </h3>
            <ol className="relative border-l-2 border-gray-300 dark:border-gray-600">
                {achievements.map((achievement, index) => (
                    <Achievement achievement={achievement} key={index} />
                ))}
            </ol>
            <a href="#achievements" className="mt-10 flex flex-row justify-center items-center mx-auto text-base font-semibold leading-7 text-black dark:text-white hover:scale-110 transition duration-100">
                Get it touch &nbsp; <FaArrowRight className="inline-block" />
            </a>
        </>
    )
}

export default Achievements;