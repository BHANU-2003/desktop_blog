import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[16px]",
};
const variants = {
  fill: {
    red_A400: "bg-red-A400 text-white-A700",
  },
  outline: {
    red_A400: "border-red-A400 border border-solid text-red-A400",
  },
};
const sizes = {
  xs: "h-[45px] px-[23px] text-base",
  sm: "h-[62px] px-[35px] text-xl",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "red_A400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer rounded-[16px] ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["red_A400"]),
};

export { Button };
