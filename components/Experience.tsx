
import Position from "~/components/Position";

const experiences = [
    {
        "Title": "Student Assistant",
        "Company name": "Southeast Missouri State Univeristy",
        "Start date": "Feberuary 2025",
        "End date": "till date ",
        "Description": [
            "Collaborated with a research team on an ongoing project aimed at developing a Neural Network model for detecting potential errors in C programs, including memory leaks, overflows, user after free, double free, etc.",
            "Played a pivotal role by generating a dataset of over 500 vulnerable C programs and providing accurate labeling, addressing the data scarcity issue, and facilitating the training of the error identification model."
        ]
    },
    {
        "Title": "Software Developer Enigineer",
        "Company name": "Tata Consultancy Services",
        "Start date": "October  2021",
        "End date": "Decmber 2024",
        "Description": [
            "Implemented an application that utilizes historical instance data and time series modeling technique to optimize the automation processes, such as backups and restores, for ServiceNow instances, leading to substantial reductions in execution times to about 63% and improved operational efficiency.",
            "Developed 100% automated Service Usage and Health Analytics (SUHA) dashboards for team-owned services, enabling real-time monitoring of crucial parameters such as service load and request volume. Utilized Impala SQL to extract and transform data from our extensive data storage infrastructure."
        ]
    },
    {
        "Title": "Placement Coordinator",
        "Company name": "Lakireddy Bali reddy College of Engineering",
        "Start date": "April 2020",
        "End date": "July 2021",
        "Description": [
            "Efficiently managed student placement records and internship opportunities, delivering regular reports to the department head. Orchestrated on-campus recruitment events, including job fairs and company presentations, facilitating valuable connections between students and potential employers.",
            "Offered comprehensive support to students during the placement process, encompassing resume and cover letter crafting, interview readiness, and effective job search strategies. Resulted in a remarkable increase of over 100 placements within the computer science department compared to the previous year."
        ]
    },
];

const Experience = () => {
    return (
        <>
            <h3 className="uppercase tracking-[11px] text-center font-semibold text-gray-800 dark:text-gray-100 text-2xl pl-[11px] mb-9">
                Experience
            </h3>
            <ol className="relative border-l-2 border-gray-300 dark:border-gray-600">
                {experiences.map((experience, index) => (
                    <Position experience={experience} key={index} />
                ))}
            </ol>
        </>
    )
}

export default Experience;