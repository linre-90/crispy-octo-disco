import React from "react";
import { faRobot, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Message visible in ui. Conditional icon rendering for user and robot...
const Message = (props) => {
  let layout = "card mb-0 border p-2 ";

  if (!props.human) {
    layout += "bg-primary ms-5 border-secondary rounded-0 border-end-0 border-bottom-0";
  } else {
    layout += "bg-primary me-5 border-secondary rounded-0 border-start-0 border-bottom-0";
  }

  return (
    <div className={layout}>
      <div className="row g-0">
        <div className="col-2">
          {!props.human ? (
            <FontAwesomeIcon color="#351431" icon={faRobot}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon color="#351431" icon={faUserAlt}></FontAwesomeIcon>
          )}
        </div>
        <div className="col-10 ">
          <div className="card-body bg-primary rounded-0">
            <p className="card-text">
              {props.text}{" "}
              {props.linkUrl != null && (
                <a className="text-danger" href={props.linkUrl}>
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
