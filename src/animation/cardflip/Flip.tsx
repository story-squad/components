import React, { useState } from "react";

const Flip = (): React.ReactElement => {
  const [flip, setFlip] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div onClick={() => setFlip(!flip)} style={{ width: 100 }}>
        {flip ? (
          <div style={{ height: 100, width: 100, backgroundColor: "#Ff2d" }}>
            he
          </div>
        ) : (
          <div style={{ height: 100, width: 100, backgroundColor: "#3f2d" }}>
            Heyo
          </div>
        )}
      </div>
    </div>
  );
};

export default Flip;
