export const required = value => value ? undefined : 'Required';
export const minLength = value => value.length < 5 ? 'Min length 5' : undefined;
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)