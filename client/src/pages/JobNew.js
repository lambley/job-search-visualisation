import { Formik, Field, Form } from 'formik';

const JobNew = () => {
  return (
    <div className="text-center">
      <h1>Create new Job Application</h1>
      <Formik initialValues={{
        date: '',
        jobTitle: '',
        applicationMethod: ''
      }}

      onSubmit={async(values) => {
        await console.log(values);
      }}

      >
        <Form>
          <label htmlFor="date">Date</label>
          <Field id="date" name="date" placeholder=''></Field>

          <label htmlFor="jobTitle">Job Title</label>
          <Field id="jobTitle" name="jobTitle" placeholder='Software Developer'></Field>

          <label htmlFor="applicationMethod">Application Method</label>
          <Field id="applicationMethod" name="applicationMethod" placeholder='e.g. Indeed'></Field>

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default JobNew;
