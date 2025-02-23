import React, { useEffect, useState } from "react";

import Project from "~/components/Project";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/jayasaipadala/repos")
            .then((res) => res.json())
            .then((data) => {
                setProjects(
                    data
                        .filter((project: { name: string; }) => !["veera venkata naga surya jaya sai-padala", "major-project-common"].includes(project.name))
                        .sort((a: { created_at: string; }, b: { created_at: string; }) => b.created_at.localeCompare(a.created_at))
                );
            });
    }, []);

    return (
        <>
            <h3 className="uppercase tracking-[11px] text-center font-semibold text-gray-800 dark:text-gray-100 text-2xl pl-[11px] mb-9">
                Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    projects.map((project: { name: string; description: string; topics: [string]; html_url: string; created_at: string; }, index: React.Key | null | undefined) => (
                        <Project project={project} key={index} />
                    ))
                }
            </div>
        </>
    )
}

export default Projects;