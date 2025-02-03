import { Field } from 'react-final-form';
import { Button } from '@mui/material';
import { composeValidators, minLength, required } from '../../helpers/validators';

import Input from '../Input/Input';

const UserForm = (props) => {
    const { errors, handleSubmit } = props;

    return (
      <form onSubmit={handleSubmit}>
        <Field component={Input} validate={required} label="Email" name="email" />
        <br/>
        <Field component={Input} validate={composeValidators(required, minLength)} label="Password" name="password" />
        <br/>
        <Button variant="outlined" type="submit" disabled={Object.keys(errors).length}>Send</Button>
      </form>
    )
}

export default UserForm;
