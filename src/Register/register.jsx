import Footer from "../Footer/footer"
import Header from "../Header/header"
import "./register.css"
import { useEffect, useRef } from "react";

function Register() {
    const buttonRef = useRef(null);
    const dialogRef = useRef(null);
    const closeDialogButtonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        const dialog = dialogRef.current;
        const closeDialogButton = closeDialogButtonRef.current;

        const showDialog = (event) => {
            event.preventDefault(); 
            dialog.showModal();
        };

        const closeDialog = () => {
            dialog.close();
        };

        if (button) {
            button.addEventListener("click", showDialog);
        }
        if (closeDialogButton) {
            closeDialogButton.addEventListener("click", closeDialog);
        }

        return () => {
            if (button) {
                button.removeEventListener("click", showDialog);
            }
            if (closeDialogButton) {
                closeDialogButton.removeEventListener("click", closeDialog);
            }
        };
    }, []);

    return (
        <>
            <Header />
            <div className="register-tab">
                <form action="" id="register-form">
                    <h1>Register</h1>
                    <div className="input-tab">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" required />
                    </div>
                    <div className="input-tab">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" required />
                    </div>
                    <div className="input-tab">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-tab">
                        <label htmlFor="mobileno">Mobile No</label>
                        <input type="tel" id="mobileno" name="mobileno" required />
                    </div>
                    <div className="dropdown">
                        <label htmlFor="branch">Branch</label>
                        <select id="branch" name="branch" required>
                            <option value="">Select Branch</option>
                            <option value="CSE">CSE</option>
                            <option value="EE">IT</option>
                            <option value="AI">AIML</option>
                            <option value="BS">CSBS</option>
                            <option value="DS">CSDS</option>
                            <option value="ECE">ECE</option>
                            <option value="ME">ME</option>
                            <option value="CE">CE</option>
                            <option value="PT">PT</option>
                            <option value="AU">AU</option>
                        </select>
                    </div>
                    <div className="dropdown">
                        <label htmlFor="college">College</label>
                        <select id="college" name="college" required>
                            <option value="">Select College</option>
                            <option value="UIT">UIT</option>
                            <option value="SOIT">SOIT</option>
                        </select>
                    </div>
                    <div className="input-tab">
                        <label htmlFor="enrollmentNo">Enrollment No</label>
                        <input type="text" id="enrollmentNo" name="enrollmentNo" required />
                    </div>
                    <div className="write">
                        <label htmlFor="textarea1">Why do you want to come for Event?</label>
                        <textarea id="textarea1" name="textarea1" rows="4" required></textarea>
                    </div>
                    <div className="write">
                        <label htmlFor="textarea2">What is your expectation from this event?</label>
                        <textarea id="textarea2" name="textarea2" rows="4" required></textarea>
                    </div>
                    <div className="toggle">
                        <label htmlFor="toggle-button" className="switch">Do you want to get updates in future from event conducted by E-Cell RGPV
                        </label>
                        <input type="checkbox" id="toggle-button" />
                        <span className="slider"></span>
                    </div>
                    <div>
                        <button className="bt2" id="bt2" type="submit" ref={buttonRef}>Submit</button>
                    </div>
                </form>
                <dialog ref={dialogRef}>
                    <p>Successfully Registered !</p>
                    <button ref={closeDialogButtonRef} className="bt1">Close</button>
                </dialog>
            </div>
            <Footer />
        </>
    );
}



export default Register
