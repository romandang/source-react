import { ErrorMessage } from "formik";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

const InputField = (props) => {
  const { form, field, label, type, placeholder } = props;
  const { errors, touched } = form;
  const { name } = field;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input 
        {...field}
        type={type}
        placeholder={placeholder}
        invalid={showError}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
    
  );
}

export default InputField;