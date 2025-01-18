import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Button} from '@mui/material';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {addItem} from '../../redux/slices/todoSlicer.js';
import '../../index.css';


const validationSchema = Yup.object({
    task: Yup.string()
        .min(5, 'Минимум 5 символов!')
        .max(12,"Максимум 12 символов!")
        .required('U should fill the field'),
});

const Input = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, {resetForm}) => {
        dispatch(addItem(values.task));
        resetForm();
    };

    return (
        <Formik
            initialValues={{task: ''}}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({errors, touched}) => (
                <Form className="form">
                    <div>
                        <Field name="task"
                               className={`todo__field ${touched.task && errors.task ? "input-error": ""}`}
                               placeholder="Enter task"

                        />
                        <Button type="submit" variant="outlined">
                            Add
                        </Button>
                    </div>
                    <ErrorMessage name="task" component="span" className="error-text"/>
                </Form>
            )}

        </Formik>
    );
};

export default Input;
