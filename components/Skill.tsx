import Image from "next/image";


type Props = {
    skill: string,
};

const Skill = ({ skill }: Props) => {
    return (
        <div
            className="group relative flex flex-col justify-center items-center mx-auto max-w-sm rounded overflow-hidden shadow-2xl bg-transparent p-3 hover:scale-105"
        >
            <Image
                src={`./images/skills/${skill}.jpeg`}
                alt={skill}
                height={100}
                width={100}
                className="rounded w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />
            <span className="mt-2 text-center tracking-[2px] text-black dark:text-white">{skill}</span>
        </div>
    )
}

export default Skill;