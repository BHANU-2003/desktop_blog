import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  lg: "text-lg font-normal",
  s: "text-sm font-normal",
  "2xl": "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  xl: "text-2xl font-normal md:text-[22px]",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
