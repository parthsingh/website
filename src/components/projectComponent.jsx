import React from 'react';
import '../styles/Index.css'; // Import your stylesheetcl

const ProjectComponent = ({ project }) => {
    const { title, description, technologies, imageUrl } = project;

    return (
        <div className="card flex flex-row  bg-base-100 shadow-xl m-2 hover:-translate-y-1 hover:scale-110" >
            <div className="flex-shrink-0">
                <figure>
                    <img className="w-96 h-96" src={imageUrl} alt={title} />
                </figure>
            </div>
            <div className="card-body flex-grow">
                <h2 className="card-title text-3xl mb-4">{title}</h2>
                <p className="mb-6">{description}</p>
                <div className="card-actions justify-start">
                    {Array.isArray(technologies) && technologies.map((tech, index) => (
                        <div key={index} className="badge badge-neutral badge-lg">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;
