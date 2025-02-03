import { Form } from "react-final-form";
import { Field } from "react-final-form";
import { Button } from "@mui/material";
import { required } from "../../helpers/validators";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../redux/slices/selectors';

import Input from "../Input/Input";
import { addTodo } from "../../redux/slices/todosSlice";

const TodoForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.isLoading);

  const onSubmit = async values => dispatch(addTodo(values.name))

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form }) => {
        const submitForm = (event) => {
          handleSubmit(event);
          setSubmitted(true);
          form.reset()
        };

        return (
          <form onSubmit={submitForm}>
            <Field
              component={Input}
              validate={required}
              submitted={submitted}
              setSubmitted={setSubmitted}
              label='Name'
              name='name'
            />
            <Button variant='outlined' type='submit' style={{ height: "56px" }} disabled={isLoading}>
              Add
            </Button>
          </form>
        );
      }}
    />
  );
};

export default TodoForm;
