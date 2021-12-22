import React, { useEffect, useRef, useState } from "react";
import { NotReady } from "../components/stateless/NotReady/notReady";
import {Link} from "gatsby";
import {FormValidator, formValidationResult} from "../FormValidator";
import { NavMenu } from "../components/stateless/navMenu/navMenu"; 
import {getAddresses} from "../Addresses"
import Footer from "../components/stateless/footer/footer";
import Spinner from "../components/stateless/spinner/spinner";

const Contact:React.FC = ():React.ReactElement => {
    const componentReady = true;
    const [timeStamp, setTimeStamp] = useState(Date.now());
    const [serverResponse, setServerResponse] = useState(null);
    const [postingForm, setpostingForm] = useState(false);
    const [messagelen, setMessageLen] = useState(0);
    const [acceptedPolicy, setAcceptedPolicy] = useState(false);
    const [wantToSubmitemail, setwantToSubmitemail] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    const formHandler = new FormValidator(20, 300);

    // refs
    const messageRef = useRef(null);
    const topicRef = useRef(null);
    const headerRef = useRef(null);
    const emailRef = useRef(null);

    useEffect(() => {
        if(formIsValid){
            
            setpostingForm(true);
            postForm();
        }
    }, [formIsValid]);

    const postForm:Function = async () => {
        console.log("TODO sent to backend function");
        let response = await {code: 200}
        
        if(response.code == 200){ // ok

        }
        else if(response.code == 400){ // bad form error
            alert("Server not accepting form. Check form and try again. If the problem continues send email to PLACEHOLDER.")
            setFormIsValid(false);
            setpostingForm(false);
        }
        else{
            window.location.href = "/errorPage";
        }
    }

    const validate:Function = () => {
        let validation: formValidationResult;

        if(acceptedPolicy && !wantToSubmitemail){
            validation = formHandler.validate({
                headline: headerRef.current.value, 
                topic: Number.parseInt(topicRef.current.value), 
                message: messageRef.current.value, 
                fillTime: Date.now() - timeStamp,
                validateEmail:false
            });
        }
        else if(acceptedPolicy && wantToSubmitemail){
            validation = formHandler.validate({
                headline: headerRef.current.value, 
                topic: Number.parseInt(topicRef.current.value), 
                message: messageRef.current.value, 
                email:emailRef.current.value, 
                fillTime: Date.now() - timeStamp,
                validateEmail:true
            });
        }
        if(validation.isValid){
            setFormIsValid(true);
        }
        else{
            setFormIsValid(false);
            alert("Please check form! " + validation.message);
        }
    }
 
    if(componentReady){
        return (
            <div>
                <NavMenu header="Contact" innerHeader="Navigation" navLinks={getAddresses(1)}></NavMenu>
                <div className="container mt-5 col-12 col-lg-6 col-xl-4">
                    <div className="row">
                        <h1 className="col-12 text-center">Contact form</h1>
                    </div>
                    <div className="row">
                        <h4 className="col-12 text-center">Send me questions, job offerings or just general feedback.</h4>
                    </div>
                    <div className="row">
                        <h6 className="col-12 text-center">Please read <Link to="/privacypolicy">privacy policy</Link> to learn more how your information is handled.</h6>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className=" col-10"><hr /></div>
                        <div className="col-1"></div>
                    </div>

                    {/* Form begins */}
                    <div className="mb-3">
                        <label htmlFor="headline" className="form-label">Headline</label>
                        <input ref={headerRef} type="text" className="form-control col-12" id="headline" placeholder={formHandler.placeHolders.headline} required/>
                    </div>

                    {/* select topic */}
                    <div className="mb-3">
                        <label htmlFor="topic" className="form-label">Topic</label>
                        <select ref={topicRef} className="form-select col-12" id="topic" required>
                            <option defaultValue={null}>{formHandler.placeHolders.topic}</option>
                            {
                                formHandler.getTopics().map((topic) => {
                                    return <option key={topic} value={formHandler.getTopics().indexOf(topic)}>{topic}</option>
                                })
                            }
                        </select>
                    </div>

                    {/* message */}
                    <div className="mb-0">
                        <label htmlFor="message" className="form-label">Example textarea</label>
                        <textarea 
                            ref={messageRef} 
                            onKeyUp={() => setMessageLen(messageRef.current.value.length)}  
                            className="form-control" 
                            id="message" 
                            rows={3} 
                            placeholder={formHandler.placeHolders.messageArea} 
                            required minLength={formHandler.minLength} 
                            maxLength={formHandler.maxLength}>
                        </textarea>
                    </div>
                    <div className="row">
                        <p className="col-12 text-end"><small>{messagelen}/{formHandler.maxLength}</small></p>
                    </div>

                    {/* accept privacy policy checkBox */}
                    <div className="row">
                        <div className="form-check form-switch switch-mobile d-lg-none">
                            <input className="form-check-input" type="checkbox" id="acceptPrivacy" onChange={() => setAcceptedPolicy(!acceptedPolicy)}/>
                            <label className="form-check-label" htmlFor="acceptPrivacy"><small><u>I have read and accept privacy policy.</u></small></label>
                        </div>
                        <div className="form-check form-switch switch-desktop d-none d-lg-block">
                            <input className="form-check-input" type="checkbox" id="acceptPrivacy" onChange={() => setAcceptedPolicy(!acceptedPolicy)}/>
                            <label className="form-check-label" htmlFor="acceptPrivacy"><small><u>I have read and accept privacy policy.</u></small></label>
                        </div>
                    </div>
                    
                    {/* submit email checkBox */}
                    <div className="row mb-3">
                        <div className="form-check form-switch switch-mobile d-lg-none">
                            <input className="form-check-input" type="checkbox" id="submitEmail" onChange={() => setwantToSubmitemail(!wantToSubmitemail)}/>
                            <label className="form-check-label" htmlFor="submitEmail"><small><u>I want to submit my email address for response.</u></small></label>
                        </div>
                        <div className="form-check form-switch switch-desktop d-none d-lg-block">
                            <input className="form-check-input" type="checkbox" id="submitEmail" onChange={() => setwantToSubmitemail(!wantToSubmitemail)}/>
                            <label className="form-check-label" htmlFor="submitEmail"><small><u>I want to submit my email address for response.</u></small></label>
                        </div>
                    </div>

                    {/* optional email */
                        wantToSubmitemail &&
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input ref={emailRef} type="email" className="form-control col-12" id="email" placeholder={formHandler.placeHolders.email}/>
                        </div>
                    }
                    
                    {/* Submit button */
                    acceptedPolicy && !wantToSubmitemail && !postingForm|| acceptedPolicy && wantToSubmitemail && !postingForm ?
                        <div className="row mb-3">
                            <div className="col-3"></div>
                            <div className="col-3"></div>
                            <div className="col-3"></div>
                            <div className="col-3 text-end">
                                <button type="button" className="btn btn-primary" onClick={() => validate()}>Send</button>
                            </div>
                        </div>
                    : !postingForm ?
                        <div className="row mb-3">
                            <div className="col-3"></div>
                            <div className="col-3"></div>
                            <div className="col-3"></div>
                            <div className="col-3 text-end">
                                <button type="button" className="btn btn-primary" disabled>Send</button>
                            </div>
                        </div>
                    : !serverResponse && serverResponse != null ?
                        <div><Spinner size="3x" align="center"></Spinner></div>

                    :
                        <div>{serverResponse}</div>
                    }
                </div>
                <Footer></Footer>
            </div>
        )
    }
    else{
        return <NotReady pageName="Contact"></NotReady>;
    }
}

export default Contact;