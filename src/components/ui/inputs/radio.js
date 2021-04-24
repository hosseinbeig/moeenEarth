import React from "react";
import { FormControlLabel, Radio } from "@material-ui/core";
import { useField } from "formik";

const CustomRadioField = ({ label, ...props }) => {
  const [field] = useField(props);

  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};
export default CustomRadioField;
