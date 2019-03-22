import React from "react";

export default function CompareButton(props) {
  return (
    <div>
      <button className="compare-nav" onClick={() => props.compare(true)}>Compare Items</button>
    </div>
  );
}
