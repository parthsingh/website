import React from "react";
import Headerx from "../components/headerx";
import '../styles/Index.css'; // Import your stylesheetcl


const About = () => {
    return (
        <>
            <Headerx />
            <div className=" container mx-auto mt-6 columns-2 flex">
                <div className="prose prose-neutral ml-5">
                    <h4>About Me</h4>
                    <p className="">
                        Hello! I'm Parth Singh, a fourth-year Computer Science major at Cal Poly Pomona, deeply passionate about the realms of web development and machine learning. Throughout my academic journey, I've immersed myself in a diverse range of courses, acquiring proficiency in frontend technologies like HTML, CSS, and JavaScript, as well as backend technologies.My journey into machine learning has been equally exciting, with exploration into frameworks like TensorFlow and engagement in projects that involve data analysis and predictive modeling. What fascinates me most is the intersection of web development and machine learning, and I'm always eager to explore projects that bridge these two domains.
                    </p>
                    <p>
                        Looking ahead, I aspire to [mention your professional goals, such as further education, specific industries, or contributions to open-source projects]. I'm committed to continuous learning and stay updated on the latest developments in technology, having completed courses in [mention any relevant online courses or certifications].
                    </p>
                    <p>
                        Beyond coding, you'll find me [mention any hobbies or interests]. I believe in a holistic approach to life, finding inspiration beyond the screen. Thank you for visiting my portfolio! Feel free to explore my projects and connect with me on [mention any social media or professional platforms]. Happy coding!
                    </p>
                </div>
                <div className="justify-center w-3/4 avatar ml-5">
                    <div className="w-6/12 h-4/12 mt-10 rounded hover:-translate-y-1 hover:scale-110 "><img src={process.env.PUBLIC_URL + '/linkedinPic.jpg'}></img>
                    </div>
                </div>
            </div></>
    );
};

export default About;