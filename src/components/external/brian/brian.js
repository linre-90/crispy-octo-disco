import React, { useEffect, useRef, useState } from "react";
import Suggestion from "./suggestion";
import BrianInterface from "./brianInterface";
import Message from "./message";

import gsap from "gsap";
import { v4 as uuidv4 } from "uuid";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { Backdrop } from "../../projectComp/backdrop/Backdrop";



export const BrianBot = () => {
    // state declaratioins
    const [input, setInput] = useState("");
    const [suggests, setSuggests] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const [messages, setMessages] = useState([]);
    const [backdropActive, setbackdropActive] = useState(false);

    const messageEnd = useRef();// dummy end element in "chat"
    
    // Brian animation
    const brianRef = useRef(null);
    useEffect(() => {
		if(backdropActive){
			gsap.timeline()
			.to(brianRef.current, { startAt:{scale:"0.75", top: "200px"}, opacity: "1", display: "block", top: 0})
			.to(brianRef.current, { scale: "1"});
		}
		if(!backdropActive){
			gsap.timeline()
			.to(brianRef.current, {scale: "0.9"})
			.to(brianRef.current, {opacity: "0", display: "none", top: "200px"});
		}
	}, [backdropActive]);

    // brian button animation
    const brianButton = useRef(null);
	useEffect(() => {
		gsap.timeline().to(brianButton.current, {scaleY: 0.85, scaleX: 1.2})
		.to(brianButton.current, {scaleY: 1, scaleX:1})
		.repeat(4);
	}, [])


    // graphql query
    const data = useStaticQuery(
        graphql`
        query brianQuery {
            mongo_data {
              keywords {
                name
                url
              }
              populars {
                human
                linkUrl
                text
              }
            }
          }
        `
    );

    useEffect(() => {
        // create keywords from mongo
        let initialKeywords = [];
        data.mongo_data.keywords.forEach(element => {
            initialKeywords.push({name: element.name, url:element.url});
        });
        
        // create messages from mongo
        let initialMessages = [];
        data.mongo_data.populars.forEach(element => {
            initialMessages.push({linkUrl: element.linkUrl, text:element.text, human:element.human});
        });
        
        setKeywords(initialKeywords);
        setMessages(initialMessages);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // scrolls new message to view
        messageEnd.current?.scrollIntoView({ behavior: "smooth" })
    },[messages]);


    // Updates brians suggestions
    const updateSuggested = (input) => {
        if (keywords.length > 0 && input.length > 1) {
            let briansIdea = keywords.filter((word) => {
                if (word.name.includes(input.toLowerCase())) {
                    return word;
                }else{
                    return null;
                }
            });
            setSuggests(briansIdea);
        } else {
            setSuggests([]);
        }
    };

    //  modifies messages data and updates state, aka "sends messages to message view"
    const sendMessage = (message) => {
        let question = {
            text: message[0].name,
            linkUrl: message[0].linkUrl,
            human: true
        };

        let response = {
            text: message[1].name,
            linkUrl: message[1].linkUrl,
            human: false
        };
        setMessages([...messages, question, response]);
    };

    return (
        <div>
            {backdropActive && <Backdrop></Backdrop>}
            <div ref={brianRef} id="brianWrapper">
                <div className="bg-secondary rounded p-3" id="">
                    <div>
                        {/* message field */}
                        <div className="scrollField">
                            {messages.map((e) => {
                                return (
                                    <Message
                                        key={uuidv4()}
                                        text={e.text}
                                        linkUrl={e.linkUrl}
                                        human={e.human}
                                    ></Message>
                                );
                            })}
                            <div ref={messageEnd}></div>{/* Dummy end of chat div*/}
                        </div>
                        <hr></hr>

                        {/* Autocomplete result*/}
                        <div>
                            <Suggestion dataList={suggests}></Suggestion>
                        </div>

                        {/* Brians userinterface */}
                        <div>
                            <BrianInterface
                                inputValue={input}
                                setInputFunction={setInput}
                                updateSuggestState={() => updateSuggested(input)}
                                sendMsg={sendMessage}
                                suggestionList={suggests}
                            ></BrianInterface>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chatbotButton">
				<button
                    ref={brianButton}
					className="btn btn-secondary btn-floating mb-0 mt-0"
					type="button"
					onClick={() => {
						setbackdropActive(!backdropActive);
					}}
				>
					<h5>
						<FontAwesomeIcon icon={faRobot}></FontAwesomeIcon>  Brian
					</h5>
				</button>
			</div>
        </div>
    );
};
            


