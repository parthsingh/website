import React, { useEffect } from "react";
import Headerx from "../components/headerx";
import '../styles/Index.css';
import emailjs from '@emailjs/browser';



const Contact = () => {

    useEffect(() => {
        // Initialize Email.js with your public key
        emailjs.init('dhTS5E6-x7ha1gLW9');
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();


        // Validate form inputs
        const userName = event.target.user_name.value;
        const userEmail = event.target.user_email.value;
        const message = event.target.message.value;

        if (!userName || !userEmail || !message) {
            // Show an error message or take appropriate action for empty fields
            
            document.getElementById('my_modal_4').showModal()
            console.log("Error: Please fill in all required fields.");
            return;
        }

        // Generate a five-digit number for the contact_number variable
        event.target.contact_number.value = Math.random() * 100000 | 0;

        // Send the form using Email.js
        emailjs.sendForm('service_6mwqt5n', 'contact_form', event.target)
            .then(function (response) {
                console.log('SUCCESS!', response);
                document.getElementById('my_modal_3').showModal()
            }, function (error) {
                console.log('FAILED...', error);
                document.getElementById('my_modal_4').showModal()


            });
    }

    const onReload = () => {
        window.location.reload();

    }



    return (
        <>
            <Headerx />
            <div className="flex flex-col items-center justify-center mx-auto w-1/2 border-grey-100 border-0">
                <p className="text-6xl font-bold font mt-4 tracking-wide">Contact</p>

                <form onSubmit={onSubmit} className="flex flex-col gap-6 mt-11 w-3/4 items-center">
                    <input type="text" name="contact_number" style={{ display: 'none' }} />
                    <input type="text" name="user_name" placeholder="Name" className="input input-md input-bordered w-full max-w-xs bg-slate-50" />
                    <input type="text" name="user_email" placeholder="Email" className="input input-md input-bordered w-full max-w-xs bg-slate-50" />
                    <textarea name="message" className="textarea text-sm textarea-lg w-full h-48 max-w-xs textarea-bordered bg-slate-50" placeholder="Message"></textarea>
                    <input type="submit" value="Submit" className=" text-2xl font-mono tracking-wide btn btn-neutral btn-wide mt-5 mb-5"></input>

                </form>


            </div>


            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={onReload} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="text-emerald-700 font-bold text-3xl">Success!</h3>
                    <p className="text-xl font-serif py-4">Your message has been sent<br></br>Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={onReload} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="text-red-700 font-bold text-3xl">Error!</h3>
                    <p className="text-xl font-serif py-4">Please try again.<br></br>Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
        </>
    );
};

export default Contact;