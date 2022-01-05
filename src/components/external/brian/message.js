import React from "react";
import { faRobot, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Message visible in ui. Conditional icon rendering for user and robot...
const Message = (props) => {
  let layout = "card mb-3 border p-2 ";

  if (!props.human) {
    layout += "bg-warning ms-5 border-warning rounded";
  } else {
    layout += "bg-dark me-5 border-dark rounded";
  }

  return (
    <div className={layout}>
      <div className="row g-0">
        <div className="col-2">
          {!props.human ? (
            <FontAwesomeIcon icon={faRobot}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
          )}
        </div>
        <div className="col-10">
          <div className="card-body">
            <p className="card-text">
              {props.text}{" "}
              {props.linkUrl != null && (
                <a href={props.linkUrl}>
                  <i>link</i>
                </a>
              )}
            </p>
            <p className="card-text d-none d-sm-block">
              <small className="text-muted">
                {new Date(Date.now()).toString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
