import React from "react";
import PropTypes from "prop-types";
import Box from "../Box/Box";
import { getSizes } from "./sizes";
import { getClassName } from "./classes";
import { getColors } from "./colors";

const Button = React.forwardRef(
  (
    {
      active = false,
      as = "button",
      color = null,
      disabled = false,
      href = undefined,
      icon = null,
      label = null,
      onClick = undefined,
      rounded = false,
      size = "medium",
      variant = "default",
      wrapper = null,
      ...rest
    },
    ref
  ) => {
    const className = getClassName(active, rounded, disabled, href, onClick);
    const sxColor = getColors(variant, color);
    const sxSize = getSizes(size);

    if (React.isValidElement(icon)) {
      icon = label
        ? React.cloneElement(icon, sxSize.icon.label)
        : React.cloneElement(icon, sxSize.icon.default);
    }

    if (href && !onClick) {
      as = "a";
    }

    const buttonJSX = (
      <Box
        ref={ref}
        as={as}
        className={className}
        href={href ? href : undefined}
        onClick={onClick ? onClick : undefined}
        variant={variant}
        {...rest}
        __themeKey="buttons"
        __css={{
          appearance: "none",
          display: "inline-flex",
          alignItems: "center",
          textAlign: "center",
          lineHeight: "inherit",
          textDecoration: "none",
          border: 0,
        }}
        sx={{
          ...sxColor,
          ...sxSize.button,
        }}
      >
        {icon}
        {label}
      </Box>
    );

    if (wrapper) {
      return React.cloneElement(wrapper, { children: buttonJSX });
    } else {
      return buttonJSX;
    }
  }
);

Button.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOf(["button", "a"]),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["default", "primary", "outlined"]),
  wrapper: PropTypes.element,
};

export default Button;
