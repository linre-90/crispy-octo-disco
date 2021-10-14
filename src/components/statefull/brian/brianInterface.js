import React from "react";

// Brians user interaction field.
const BrianInterface = (props) => {
  return (
    <div>
      <input
        placeholder="Ask brian..."
        default=""
        onKeyDown={(e) => {
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
