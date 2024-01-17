import React from "react";

const Menu = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect
        width="18"
        height="1.5"
        x="3"
        y="7.001"
        fill="currentColor"
        rx=".75"
      />
      <rect
        width="15"
        height="1.5"
        x="3"
        y="11.251"
        fill="currentColor"
        rx=".75"
      />
      <rect
        width="18"
        height="1.5"
        x="3"
        y="15.499"
        fill="currentColor"
        rx=".75"
      />
    </svg>
  );
};

export default Menu;