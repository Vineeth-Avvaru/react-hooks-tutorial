import React, { useEffect, useState } from "react";

// function UseEffectHook() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");

//   useEffect(() => {
//     console.log("Updated the document title");
//     document.title = `Clicked ${count} times`;
//   }, [count]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//         {" "}
//         Click {count} times
//       </button>
//     </div>
//   );
// }

function UseEffectHook() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handlePosition = (e) => {
    console.log("position handler");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("use Effect Called");
    window.addEventListener("mousemove", handlePosition);

    return () => {
      console.log("Remove Event Listener");
      window.removeEventListener("mousemove", handlePosition);
    };
  }, []);
  return (
    <div>
      Hooks X - {x} , Y - {y}
    </div>
  );
}

export default UseEffectHook;
