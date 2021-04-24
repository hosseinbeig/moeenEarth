import React from "react";
import { useField } from "formik";
import MuiPhoneNumber from "material-ui-phone-number";

const PhoneNumberInput = ({
  placeholder,
  label,
  variant,
  multiline,
  required,
  type,
  onFocusProp,
  className,
  onInputChange,
  ...props
}) => {
  const [field, meta] = useField(props);
  const errText = meta.error && meta.touched ? meta.error : "";
  return (
    <div>
      <MuiPhoneNumber
        {...field}
        defaultCountry="ca"
        label="Phone Number (With WhatsApp & Country code)"
        variant="outlined"
        required
        fullWidth
        onChange={onInputChange && onInputChange}
        error={!!errText}
        helperText={errText}
      />
    </div>
  );
};

export default PhoneNumberInput;
