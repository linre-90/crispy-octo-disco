import React from "react";

// Brians user interaction field.
const BrianInterface = (props) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">Ask@Brian</span>
            </div>
            <input
                className="form-control"
                default=""
                onKeyDown={(e) => {
                    if (e.key === "Enter" && props.suggestionList.length > 0) {
                        const question = {
                            name: e.target.value,
                            linkUrl: "null"
                        };
                        const response = {
                            name: "This migth be helpfull: " + props.suggestionList[0].name,
                            linkUrl: props.suggestionList[0].url
                        };
                        props.sendMsg([question, response]);
                        e.target.value = "";
                    }
                    props.setInputFunction(e.target.value);
                    props.updateSuggestState(props.input);
                }}
            ></input>
        </div>

    );
};

export default BrianInterface;
