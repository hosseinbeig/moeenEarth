import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

const CustomTextField = ({
  placeholder,
  label,
  variant,
  multiline,
  required,
  type,
  onFocusProp,
  className,
  onChange,
  ...props
}) => {
  const [field, meta] = useField(props);
  const errText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      className={className}
      helperText={errText}
      {...field}
      placeholder={placeholder}
      label={label}
      error={!!errText}
      variant={variant ? variant : "outlined"}
      multiline={multiline}
      required={required ? required : false}
      fullWidth
      type={type ? type : "text"}
      onFocus={onFocusProp && onFocusProp}
    />
  );
};

export default CustomTextField;
