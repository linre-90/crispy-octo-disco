import React from "react";


// Function to present brians suggestions
const Suggestion = (props) => {
  let index = 0;

  return (
    <div className="row">
      <div className="col-6"></div>
      <div className="col-6">
        <ul className="list-group">
          {props.dataList.map((item) => {
            if (index === 0) {
              index++;
              return (
                <li
                  className="list-group-item active pt-0 pb-0 mt-0 mb-0"
                  key={item.name}
                >
                  <p className="pt-0 pb-0 mt-0 mb-0 text-end">{item.name}</p>
                </li>
              );
            } else {
              index++;
              return (
                <li
                  className="list-group-item pt-0 pb-0 mt-0 mb-0"
                  key={item.name}
                >
                  <p className="pt-0 pb-0 mt-0 mb-0 text-end">{item.name}</p>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Suggestion;
