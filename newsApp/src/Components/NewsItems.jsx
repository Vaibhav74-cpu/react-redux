import React from "react";

function NewsItems(props) {
  return (
    <div
      className="card bg-dark d-inline-block mb-3 mx-3 my-3 px-2 py-2"
      style={{ maxWidth: "343px", maxHeight: "300px" }}
    >
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title.slice(0.5)}</h5>
          <p className="card-text">{props.description.slice(0, 90)}</p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItems;
