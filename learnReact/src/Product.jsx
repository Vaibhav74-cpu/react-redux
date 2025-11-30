import React, { useState } from "react";

function Product({ name, charax }) {
  let [a, b] = useState(true);
  return (
    <>
      <div>
        <h1>{name}</h1>
        <h1>{charax.age}</h1>
        <h1>{charax.address}</h1>
      </div>

      <div>

        <h1 className={`${a === false ? "text-red-700" : "text-blue-700"}`}>
          {a === false ? "hello" : "hey"}
        </h1>

        <button
          onClick={() => {
            b(!a);
          }}
        >
          change
        </button>
        
      </div>
    </>
  );
}

export default Product;
