import {Formik, Form, Field} from 'formik';
import {Button} from '@mui/material';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {addItem} from '../../redux/slices/todoSlicer.js';
import '../../index.css';


const validationSchema = Yup.object({
    task: Yup.string()
        .min(5, 'Минимум 5 символов')
        .required('U should fill the field'),
});

const Input = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values,{resetForm}) => {
        dispatch(addItem(values.task));
        resetForm();
    };

    return (
        <Formik
            initialValues={{task: ''}}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >

            <Form className="form">
                <Field name="task"

                       className="todo__field"
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
