import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { RangePicker, Switch, Slider, Select, Option, InputNumber, DynamicFieldSet } from '@openmrs/react-components'; 

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} style={{margin: "20px"}}>


      <Field label="Status" name="status" id="status" component={Switch} type="checkbox" />
      <Field label="Children" name="children" id="children" component={Slider} type="number" />
      <Field label="Counter" name="counter" id="counter" component={InputNumber} />

      <Field mode="multiple" placeholder="Please select favourite colors" label="Favoraite Color" name="favoriteColor" component={Select}>
        <Option value="ff0000">Red</Option>
        <Option value="00ff00">Green</Option>
        <Option value="0000ff">Blue</Option>
      </Field>


      <Field
        label="Filter dates"
        name="rangepicker"
        component={RangePicker}
        placeholder={["From", "To"]}
        hasFeedback
        onFocus={e => e.preventDefault()}
        onBlur={e => e.preventDefault()}
      />

      <FieldArray name="members" component={DynamicFieldSet} keys={[{key: "firstName"}, {key: "lastName"}, {key: "mobile"}]}/>


      <button type="primary" disabled={pristine || submitting} htmlType="submit">
        Submit
      </button>

      <button disabled={pristine || submitting} onClick={reset}>
        Clear Values
      </button>
    </form>
  );
};

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }

  return errors;
};

export default reduxForm({
  form: "simple", // a unique identifier for this form
  validate
})(SimpleForm);
