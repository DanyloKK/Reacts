import { Field } from 'react-final-form';
import { Button } from '@mui/material';
import { required } from '../../helpers/validators';
import { useState } from 'react';

import Input from '../Input/Input';

const TodoForm = (props) => {
    const [submitted, setSubmitted] = useState(false);
    const { form, handleSubmit } = props;

    const onSubmit = (event) => {
      handleSubmit(event);
      setSubmitted(true);
      form.reset();
    }

    return (
      <form onSubmit={onSubmit}>
        <Field component={Input} validate={required} submitted={submitted} setSubmitted={setSubmitted} label="Name" name="name" />
        <Button variant="outlined" type="submit" style={{ height: '56px' }}>Add</Button>
      </form>
    )
}

export default TodoForm;
