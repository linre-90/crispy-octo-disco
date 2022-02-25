import React, { useState } from "react";
import {Link} from "gatsby";
import {FormValidator, formValidationResult} from "../FormValidator";
import { NavMenu } from "../components/projectComp/navMenu/navMenu"; 
import {getAddresses} from "../Addresses"
import {Footer} from "../components/projectComp/footer/footer";
import {Spinner} from "../components/projectComp/spinner/spinner";
import {BrianBot} from "../components/external/brian/brian";
import {TextSection} from "../components/projectComp/textSection/textSection";
import { CookieBanner } from "../components/projectComp/cookie/cookie";

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
            <NavMenu header="Contact" innerHeader="Pages" navLinks={getAddresses(1)}></NavMenu>
            <CookieBanner></CookieBanner>

            <div className="container bg-opacity-75 py-5 col-12 col-lg-6 col-xl-4 pb-0">
                <TextSection
                    text="Send me questions, job offerings or just general feedback."
                    header="Contact form"
                    headerSize={1}
                    >
                    <p className="text-secondary"><small><i>Please read <Link className="text-secondary" to='/privacypolicy'>privacy policy</Link> to learn more how your information is handled.</i></small></p>
                </TextSection>
                <div className="row border-top border-info">
                    <div className="col-1 border-end border-info"></div>
                        <div className="bg-primary rounded col-10">
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
                                <label htmlFor="headline" className="form-label">Headline</label>
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
                                <label htmlFor="topic" className="form-label">Topic</label>
                                <select onChange={(event) => setTopic(event.target.value)} className="form-select col-12 text-secondary" id="topic" required>
                                    <option className="text-info" defaultValue={null}>{formHandler.placeHolders.topic}</option>
                                    {
                                        formHandler.getTopics().map((topic) => {
                                            return <option className="text-secondary" key={topic} value={formHandler.getTopics().indexOf(topic)}>{topic}</option>
                                        })
                                    }
                                </select>
                            </div>
                            {/* message */}
                            <div className="mb-0">
                                <label htmlFor="message" className="form-label">Your message</label>
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
                                    <label className="form-check-label" htmlFor="submitEmail"><small><u>I choose to submit my email.</u></small></label>
                                </div>
                                <div className="form-check form-switch switch-desktop d-none d-lg-block">
                                    <input className="form-check-input" type="checkbox" onChange={() => setwantToSubmitemail(!wantToSubmitemail)}/>
                                    <label className="form-check-label" htmlFor="submitEmail"><small><u>I choose to submit my email.</u></small></label>
                                </div>
                            </div>

                            {/* optional email */
                                wantToSubmitemail &&
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
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
                                <div className="row mb-3 pb-5">
                                    <div className="col-4"></div>
                                    <div className="col-4"></div>
                                    <div className="col-4">
                                        <button type="button" style={{"width":"100%"}} className="btn btn-danger col-4 rounded-0" onClick={() => validate()}><span className="text-primary"><b>Send</b></span></button>
                                    </div>
                                </div>
                            : 
                                <div><Spinner size="3x" align="center"></Spinner></div>
                            }
                        </div>
                    <div className="col-1"></div>
                </div>


            </div>
            <BrianBot></BrianBot>
            <div className="container"><Footer></Footer></div>
            
        </div>
    )
    
}

export default Contact;