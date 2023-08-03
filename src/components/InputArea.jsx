import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.new} type="text" value={props.value} />
      <button onClick={props.item}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
