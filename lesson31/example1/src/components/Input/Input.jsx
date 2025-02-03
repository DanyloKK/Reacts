import TextField from '@mui/material/TextField';

const Input = (props) => {
  const { label, meta, input, setSubmitted, submitted } = props;

  return (
    <TextField
      label={label}
      error={!submitted && meta.touched && meta.error}
      helperText={!submitted && meta.touched && meta.error}
      {...input}
      onChange={(props) => {
        setSubmitted(false);
        input.onChange(props)
      }}
    />
  );
};

export default Input;
