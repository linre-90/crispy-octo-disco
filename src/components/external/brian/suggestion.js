import React from "react";
import { v4 as uuidv4 } from "uuid";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// Function to present brians suggestions
const Suggestion = (props) => {
  let index = 0;

  return (
    <div className="row">
      <div className="col-6"></div>
      <div className="col-6">
        <ul className="list-group">
        <div>
          <span><i>{props.dataList.length > 0 ? <div><FontAwesomeIcon color="" icon={faRobot}></FontAwesomeIcon> Do you mean?</div> : "" }</i></span>
          {props.dataList.map((item) => {
            if (index === 0) {
              index++;
              return (
                  <li
                    className="list-group-item active pt-0 pb-0 mt-0 mb-0 font-italic bg-info"
                    key={uuidv4()}
                  >
                    <p className="pt-0 pb-0 mt-0 mb-0 text-end bg-info"><i>{item.name}</i></p>
                  </li>
              );
            } else {
              index++;
              return (
                  <li
                    className="list-group-item pt-0 pb-0 mt-0 mb-0"
                    key={uuidv4()}
                  >
                    <p className="pt-0 pb-0 mt-0 mb-0 text-end"><i>{item.name}</i></p>
                  </li>
              );
            }
          })}
           </div>
        </ul>
      </div>
    </div>
  );
};

export default Suggestion;
