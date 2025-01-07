import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextField, Button, Box, Stack } from '@mui/material';
import {helper} from "../helper/helper.js";

const Input = (props) => {
    const { addTodo } = props;
    return (
        <Formik
            initialValues={{ item: '' }}
            validate={(values) => {
                const errors = {};
                if (!values.item) {
                    errors.item = 'Please enter a task';
                }
                return errors;
            }}

            onSubmit={(values, { resetForm }) => {
                addTodo(values.item);
                resetForm();
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Box sx={{ '& > :not(style)': { m: 1, width: '600px' } }}>
                        <Stack direction="row" spacing={1}>
                            <Field
                                name="item"
                                type="text"
                                as={TextField}
                                validate={(values) => helper(values)}
                                fullWidth
                                label="New Task"
                                variant="outlined"
                                error={Boolean(errors.item && touched.item)}
                                helperText={errors.item && touched.item && errors.item}
                            />
                            <Button  type="submit" variant="contained" color="success" >
                                Add
                            </Button>
                        </Stack>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};

export default Input;

