import { Form } from 'react-final-form';
import UserForm from './components/UserForm/UserForm';

// const validate = (values) => {
//   const errors = {};
//   if (!values.email) {
//     errors.email = 'Email required'
//   }
//   if (!values.password) {
//     errors.password = 'Required'
//   }
//   return errors;
// }

function App() {
  const handleSubmit = (values) => {
    console.log('Values:', values);
  };

  return (
    <Form
      initialValues={{
        email: '1',
        password: '2',
      }}
      // validate={validate}
      onSubmit={handleSubmit}
      render={UserForm}
    />
  );
}

export default App;
