import {Formik, Form, Field} from 'formik';
import {Button} from '@mui/material';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../redux/slices/todoSlicer.js';
import '../../index.css';


const validationSchema = Yup.object({
    task: Yup.string()
        .min(5, 'Минимум 5 символов')
        .required('U should fill the field'),
});

const Input = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(addTodo(values.task));
    };

    return (
        <Formik
            initialValues={{task: ''}}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className="form">
                <Field name="task"
                       placeholder="Enter task"
                />
                <Button type="submit" variant="outlined">
                    Add
                </Button>
            </Form>
        </Formik>
    );
};

export default Input;
