import React from "react";
import CelebrationImage from "../icons/celebration.png";
const Success = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "3rem",
        }}
      >
        <img src={CelebrationImage} />
        <h1 style={{ color: "white" }}>Thank you!</h1>
        <h1 style={{ color: "white", marginTop: "1.25rem", fontSize: "100%" }}>
          Please wait for our consulter to contact you!
        </h1>
      </div>
    </div>
  );
};

export default Success;
