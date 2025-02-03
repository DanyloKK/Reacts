import { useFormField } from './hooks/useFormField';

function App2() {
  const { value: email, onChange: handleChangeEmail } = useFormField();
  const { value: password, onChange: handleChangePassword } = useFormField();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit', email, password)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Email</span>
        <input type='email' name='email' value={email} onChange={handleChangeEmail}/>
      </label>
      <label>
        <span>Password</span>
        <input type='password' name='password' value={password} onChange={handleChangePassword} />
      </label>
      <button>Send</button>
    </form>
  );
}

export default App2;
