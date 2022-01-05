import React from "react";

function Counter(props) {
  return (
    <div>
      Click the button to add one more:
      <p>Number:{props.count}</p>
      <button>Click to add</button>
    </div>
  );
}

export default Counter;
