import React from "react";
import {
  InputLabel,
  Select,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { useField, Field } from "formik";

const CustomSelectField = (props) => {
  const { label, name, children } = props;

  const [field, meta] = useField(props);
  const errText = meta.error && meta.touched ? meta.error : "";
  return (
    <FormControl
      {...field}
      style={{ width: "100%" }}
      required
      error={!!errText}
    >
      <InputLabel>{label}</InputLabel>
      <Field type="select" as={Select} name={name}>
        {children}
      </Field>
      <FormHelperText>{errText}</FormHelperText>
    </FormControl>
  );
};

export default CustomSelectField;
