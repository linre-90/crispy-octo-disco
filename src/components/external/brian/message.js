import React from "react";
import { faRobot, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Message visible in ui. Conditional icon rendering for user and robot...
const Message = (props) => {
  let layout = "card mb-3 border p-2 ";

  if (!props.human) {
    layout += "bg-danger ms-5 border-secondary rounded";
  } else {
    layout += "bg-danger me-5 border-secondary rounded";
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
          <div className="card-body bg-warning rounded">
            <p className="card-text">
              {props.text}{" "}
              {props.linkUrl != null && (
                <a className="text-info" href={props.linkUrl}>
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
