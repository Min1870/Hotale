import React from "react";

const Button = ({ text, onClick, color, px, py, bgColor, border }) => {
  return (
    <button
      className={`bg-${bgColor}-500 hover:bg-${color}-700 font-semibold text-[13px] tracking-[2px] border-${border} text-white  py-${py} px-${px} rounded`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  onClick: () => {},
  bgColor: "transparent",
  px: "5",
  py: "3",
  border: "2",
  color: "blue",
};

export default Button;
