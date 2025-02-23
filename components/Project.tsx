import moment from "moment";
import Link from "next/link";
import { FaGithub } from 'react-icons/fa';

type Props = {
    project: {
        name: string;
        description: string;
        topics: [string];
        html_url: string;
        created_at: string;
    };
};

const capitalize = (strings: string[]) => {
    return strings.map((string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    });
}

const Project = ({ project }: Props) => {
    return (
        <Link href={project.html_url} target="_blank" rel="noreferrer" className="cursor-pointer">
            <div className="rounded overflow-hidden shadow-2xl hover:scale-105 hover:shadow-3xl transition duration-300 ease-in-out">
                <div className="px-6 py-4">
                    <div className="flex flex-row justify-between items-center">
                        <p className="font-bold text-xl mb-1 text-gray-800 dark:text-gray-100">{capitalize(project.name.split("-")).join(" ")}</p>
                        <FaGithub className="block w-8 h-8 text-black dark:text-white ml-3 my-2" />
                    </div>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">- {moment(project.created_at).format("MMMM YYYY")}</p>
                    <p className="text-gray-900 dark:text-gray-50 text-base">{project.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {project.topics.map((topic, index) => (
                        <span key={index} className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">{topic}</span>
                    ))}
                </div>
            </div>
        </Link>
    )
}

export default Project;