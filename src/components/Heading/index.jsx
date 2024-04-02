import React from "react";

const sizes = {
  s: "text-xl font-bold",
  md: "text-2xl font-bold md:text-[22px]",
  xs: "text-base font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900_01 font-robotoslab ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
