import { Formik, Field, Form } from 'formik';
import DatePickerField from '../components/DatePickerField';

const JobNew = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.date) {
      errors.date = '*Required';
    } else if (values.date > new Date()) {
      errors.date = 'Date cannot be in the future';
    }

    if (!values.jobTitle) {
      errors.jobTitle = '*Required';
    }

    if (!values.applicationMethod) {
      errors.applicationMethod = '*Required';
    }

    return errors;
  };

  return (
    <div>
      <h1 className="text-center">Create new Job Application</h1>
      <div className="form-wrapper">
        <Formik
          initialValues={{
            date: new Date(),
            jobTitle: '',
            applicationMethod: '',
          }}
          validate={validate}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {(props) => (
            <Form>
              <label htmlFor="date">Date</label>
              <DatePickerField name="date" />
              {props.errors.date && (
                <div className="form-error">{props.errors.date}</div>
              )}
              <label htmlFor="jobTitle">Job Title</label>
              <Field
                id="jobTitle"
                name="jobTitle"
                type="text"
                placeholder="Software Developer"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              ></Field>
              {props.errors.jobTitle && (
                <div className="form-error">{props.errors.jobTitle}</div>
              )}
              <label htmlFor="applicationMethod">Application Method</label>
              <Field
                id="applicationMethod"
                name="applicationMethod"
                type="text"
                placeholder="e.g. Indeed"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              ></Field>
              {props.errors.applicationMethod && (
                <div className="form-error">
                  {props.errors.applicationMethod}
                </div>
              )}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default JobNew;
