import React, { useState } from "react";
import UseEffectHook from "./UseEffectHook";

function MousePositionToggler() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>
        Toggle Mouse Position Display
      </button>
      {display && <UseEffectHook />}
    </div>
  );
}

export default MousePositionToggler;
