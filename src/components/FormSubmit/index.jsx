import InputField from "custom-fields/InputField";
import { FastField, Formik, Form } from "formik";
import { Button, Spinner } from "reactstrap";
import * as Yup from 'yup';


const initialValues = {
  name: ''
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please input name !")
});


const FormSubmit = (props) => {
  const { onSubmit } = props;

  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={ onSubmit }
      >
    { 
      FormikProps => {
        const { values, touched, errors, isSubmitting } = FormikProps;
        console.log({ values, touched, errors });

        return (
          <Form>
            <FastField 
              name="name" 
              label="Name:" 
              placeholder="Please input your name..." 
              component={InputField} 
            />
            <Button type="submit">
              { isSubmitting && <Spinner color="success" size="sm" /> } Submit
            </Button>
            
          </Form>
        )
      }
    }

    </Formik>
  )
}

export default FormSubmit;