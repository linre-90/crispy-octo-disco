import React, { useEffect, useRef, useState } from "react";
import Suggestion from "./suggestion";
import BrianInterface from "./brianInterface";
import Message from "./message";
import { v4 as uuidv4 } from "uuid";
import {useStaticQuery, graphql } from "gatsby";

const BrianBot = () => {
    // state declaratioins
    const [input, setInput] = useState("");
    const [suggests, setSuggests] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const [messages, setMessages] = useState([]);
    const messageEnd = useRef();

    // graphql query
    const data = useStaticQuery(
        graphql`
        query{
            keywords: allMongodbBrianKeywords {
                edges {
                    node {
                        name
                        url
                    }
                }
            }
            popular: allMongodbBrianPopular {
                edges {
                    node {
                        linkUrl
                        text
                        human
                    }
                }
            }
        }
        `
    );
    useEffect(() => {
        // create keywords from mongo
        let initialKeywords = []
        data.keywords.edges.forEach(element => {
            initialKeywords.push({name: element.node.name, url:element.node.url});
        });

        // create messages from mongo
        let initialMessages = [];
        data.popular.edges.forEach(element => {
            initialMessages.push({linkUrl: element.node.linkUrl, text:element.node.text, human:element.node.human});
        });

        setKeywords(initialKeywords);
        setMessages(initialMessages);
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
    );
};
            
export default BrianBot;


