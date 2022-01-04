import React, { useEffect, useState } from "react";
import {Link} from "gatsby";
import {FormValidator, formValidationResult} from "../FormValidator";
import { NavMenu } from "../components/stateless/navMenu/navMenu"; 
import {getAddresses} from "../Addresses"
import {Footer} from "../components/stateless/footer/footer";
import {Spinner} from "../components/stateless/spinner/spinner";
import {Headline} from "../components/stateless/headline/headline";
import {BrianBot} from "../components/statefull/brian/brian";

const Contact:React.FC = ():React.ReactElement => {
    const [timeStamp, setTimeStamp] = useState(Date.now());
    const [postingForm, setpostingForm] = useState(false);
    const [messagelen, setMessageLen] = useState(0);
    const [wantToSubmitemail, setwantToSubmitemail] = useState(false);

    const formHandler = new FormValidator(20, 300);

    // form field states
    const [message, setMessage] = useState(null);
    const [topic, setTopic] = useState(null);
    const [header, setHeader] = useState(null);
    const [email, setEmail] = useState(null);
    const [name, setName] = useState("-1");
    const [acceptedPolicy, setAcceptedPolicy] = useState(false);

    const postForm:Function = async (data: any) => {
        let response = await fetch(
            process.env.POST_FORM_URL,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        if(response.status == 200){ // ok
            window.location.href = "/formSend";
        }
        else if(response.status == 400){ // bad form error
            alert(`Server not accepting form. Check form and try again. If the problem continues send email to ${process.env.IN_CASE_EMERGENCY_EMAIL}.`)
            setpostingForm(false);
        }
        else{
            window.location.href = "/errorPage";
        }
    }

    const validate:Function = () => {
        let validation: formValidationResult;
        const fillTime = Date.now() - timeStamp
        if(!wantToSubmitemail){
            validation = formHandler.validate({
                headline: header, 
                topic: topic, 
                message: message, 
                fillTime: fillTime,
                validateEmail:false,
                policy: acceptedPolicy,
                name:name
            });
        }
        else if(wantToSubmitemail){
            validation = formHandler.validate({
                headline: header, 
                topic: topic, 
                message: message, 
                email: email, 
                fillTime: fillTime,
                policy: acceptedPolicy,
                validateEmail: true,
                name:name
            });
        }
        if(validation.isValid){
            const data = {
                topic: topic,
                message: message,
                email: email,
                name: name,
                acceptedPolicy: acceptedPolicy,
                fillTime: fillTime,
                headline: header
            }
            setpostingForm(true);
            postForm(data);
        }
        else{
            alert("Please check form! " + validation.message);
        }
    }
 
    return (
        <div>
            <NavMenu header="Contact" innerHeader="Navigation" navLinks={getAddresses(1)}></NavMenu>
            <div className="container mt-5 col-12 col-lg-6 col-xl-4">
                <div className="row">
                    <Headline hSize={1} text="Contact form"></Headline>
                </div>
                <div className="row">
                    <Headline hSize={4} text="Send me questions, job offerings or just general feedback."></Headline>
                </div>
                <div className="row">
                    <Headline hSize={6} text="Please read privacy policy to learn more how your information is handled."></Headline>
                    <Link className="text-center" to='/privacypolicy'>privacy policy</Link>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className=" col-10"><hr /></div>
                    <div className="col-1"></div>
                </div>

                {/* its a trap*/}
                <div className="mb-3 invisible">
                    <label htmlFor="name" className="form-label">name:</label>
                    <input 
                        type="text" 
                        className="form-control col-12" 
                        placeholder={formHandler.placeHolders.headline} 
                        required
                        onKeyUp={(event) => {
                            const target = event.target as HTMLInputElement;
                            setName(target.value);
                        }}
                    />
                </div>

                {/* Form begins */}
                <div className="mb-3">
                    <label htmlFor="headline" className="form-label">Headline:</label>
                    <input 
                        type="text" 
                        className="form-control col-12" 
                        placeholder={formHandler.placeHolders.headline} 
                        required
                        onKeyUp={(event) => {
                            const target = event.target as HTMLInputElement;
                            setHeader(target.value);
                        }}
                    />
                </div>

                {/* select topic */}
                <div className="mb-3">
                    <label htmlFor="topic" className="form-label">Topic:</label>
                    <select className="form-select col-12" id="topic" required>
                        <option defaultValue={null}>{formHandler.placeHolders.topic}</option>
                        {
                            formHandler.getTopics().map((topic) => {
                                return <option onClick={() => setTopic(formHandler.getTopics().indexOf(topic))} key={topic} value={formHandler.getTopics().indexOf(topic)}>{topic}</option>
                            })
                        }
                    </select>
                </div>
                {/* message */}
                <div className="mb-0">
                    <label htmlFor="message" className="form-label">Your message:</label>
                    <textarea 
                        onKeyUp={
                            (event) => {
                                const target = event.target as HTMLTextAreaElement;
                                setMessageLen(target.value.length);
                                setMessage(target.value);
                            }
                        }  
                        className="form-control" 
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
                        <input className="form-check-input" type="checkbox" onChange={() => setAcceptedPolicy(!acceptedPolicy)}/>
                        <label className="form-check-label" htmlFor="acceptPrivacy"><small><u>I have read and accept privacy policy.</u></small></label>
                    </div>
                    <div className="form-check form-switch switch-desktop d-none d-lg-block">
                        <input className="form-check-input" type="checkbox" onChange={() => setAcceptedPolicy(!acceptedPolicy)}/>
                        <label className="form-check-label" htmlFor="acceptPrivacy"><small><u>I have read and accept privacy policy.</u></small></label>
                    </div>
                </div>
                
                {/* submit email checkBox */}
                <div className="row mb-3">
                    <div className="form-check form-switch switch-mobile d-lg-none">
                        <input className="form-check-input" type="checkbox" onChange={() => setwantToSubmitemail(!wantToSubmitemail)}/>
                        <label className="form-check-label" htmlFor="submitEmail"><small><u>I want to submit my email address for response.</u></small></label>
                    </div>
                    <div className="form-check form-switch switch-desktop d-none d-lg-block">
                        <input className="form-check-input" type="checkbox" onChange={() => setwantToSubmitemail(!wantToSubmitemail)}/>
                        <label className="form-check-label" htmlFor="submitEmail"><small><u>I want to submit my email address for response.</u></small></label>
                    </div>
                </div>

                {/* optional email */
                    wantToSubmitemail &&
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input 
                            type="email" 
                            className="form-control col-12" 
                            placeholder={formHandler.placeHolders.email}
                            onKeyUp={(event) => {
                                const target = event.target as HTMLInputElement;
                                setEmail(target.value);
                            }}
                        />
                    </div>
                }
                {/* Submit button */
                !postingForm ?
                    <div className="row mb-3">
                        <div className="col-4"></div>
                        <div className="col-4"></div>
                        <div className="col-4">
                            <button type="button" style={{"width":"100%"}} className="btn btn-primary col-4" onClick={() => validate()}>Send</button>
                        </div>
                    </div>
                : 
                    <div><Spinner size="3x" align="center"></Spinner></div>
                }
            </div>
            <BrianBot></BrianBot>
            <Footer></Footer>
        </div>
    )
    
}

export default Contact;