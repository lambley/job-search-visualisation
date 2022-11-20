import React from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';
import { useField, useFormikContext } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('enGB', enGB);
setDefaultLocale('enGB');

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <DatePicker
      {...field}
      {...props}
      dateFormat="dd/MM/yyyy"
      locale="enGB"
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
    />
  );
};

export default DatePickerField;
