import React from "react";
import Headerx from "../components/headerx";
import '../styles/Index.css';
import courseData from '../data/courses.json'

const Courses = () => {
    return (
        <>
            <Headerx />
            <div className="flex flex-col items-center justify-center">
                <h1 className="prose underline underline-offset-1 text-2xl font-semibold">Coursework</h1>
                <h4 className="prose font-medium font-mono text-md mt-5">Here is a list of some of the relevant courses I have taken at university, with a brief description.
                For my full transcript click <a className="btn btn-sm btn-outline btn-info no-underline ml-1 " href="/transcript-december2023.pdf"  target="_blank">here.</a></h4>
                
            </div>

            <div class="divider mx-8"></div>
            <div className="">
                <div className="mt-4 grid grid-cols-3 gap-4 ml-7 ">
                    {courseData.map((course, index) => (
                        <div key={index} className="card w-96 bg-base-100 shadow-xl hover:-translate-y-1 hover:scale-110">
                            <div className="card-body">
                                <h2 className="card-title underline underline-offset-1">{course.title}</h2>
                                <p>{course.description}</p>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </>
    );
};

export default Courses;