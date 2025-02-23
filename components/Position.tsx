import Image from "next/image";


type Props = {
    experience: {
        "Title": string,
        "Company name": string,
        "Start date": string,
        "End date": string,
        "Description": string[],
    }
};

const Position = ({ experience }: Props) => {
    return (
        <li className="mb-10 ml-6">
            <Image
                src={`./images/experience/${experience["Company name"]}.jpeg`}
                alt={experience["Company name"]}
                width={500}
                height={500}
                className="absolute flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full -left-6 lg:-left-8 border-2 border-gray-300 dark:border-gray-600"
            />
            <div className="ml-6 lg:ml-8">
                <h3 className="mb-1 text-xl font-semibold text-gray-800 dark:text-gray-100">{experience["Title"]}</h3>
                <h4 className="mb-2 text-lg text-gray-800 dark:text-gray-100">{experience["Company name"]}</h4>
                <time className="block mb-2 text-base font-normal leading-none text-gray-500 dark:text-gray-400">{experience["Start date"]} - {experience["End date"]}</time>
                <ul className="mb-4 text-base font-normal text-gray-900 dark:text-gray-50 list-disc ml-4">
                    {experience["Description"].map((point, index) => <li key={index}>{point}</li>)}
                </ul>
            </div>
        </li>
    )
}

export default Position;