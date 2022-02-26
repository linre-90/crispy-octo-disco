import React from "react";

// Brians user interaction field.
const BrianInterface = (props) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text bg-danger text-primary rounded-0">Ask@Brian</span>
            </div>
            <input
                className="form-control border-bottom-0 border-start-0 rounded-0"
                default=""
                onKeyUp={(e) => {
                    if (e.key === "Enter" && props.suggestionList.length > 0) {
                        const question = {
                            name: e.target.value,
                            linkUrl: null
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
