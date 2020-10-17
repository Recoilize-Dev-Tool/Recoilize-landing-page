import React from "react";

export const Spinner = () => (
  <div>
    <svg
      style={{
        margin: "auto",
        background: "transparent",
        display: "block",
        shapeRendering: "auto",
        width: "200px",
        height: "200px"
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        r="32"
        strokeWidth="8"
        stroke="#3c0f0f"
        strokeDasharray="50.26548245743669 50.26548245743669"
        fill="none"
        strokeLinecap="round"
        transform="rotate(101.646 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        />
      </circle>
    </svg>
  </div>
);
