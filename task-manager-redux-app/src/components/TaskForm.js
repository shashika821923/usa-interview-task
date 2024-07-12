import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Button, TextField } from '@material-ui/core';
import * as Yup from 'yup';
import './../styles/TaskForm.css';
import { addTask } from '../redux/actions/taskActions';

class TaskForm extends React.Component {
    render() {
        const initialValues = {
            taskText: ''
        };

        const validationSchema = Yup.object().shape({
            taskText: Yup.string().required('Task text is required')
        });

        const handleSubmit = (values, { resetForm }) => {
            const newTask = {
                id: Math.floor(Math.random() * 1000),
                text: values.taskText,
                completed: false,
                createdAt: new Date()
            };
            this.props.addTask(newTask);
            resetForm();
        };

        return (
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ errors, touched }) => (
                    <Form>
                        <div className="form-field-container">
                            <Field
                                as={TextField}
                                name="taskText"
                                label="Task"
                                variant="outlined"
                                fullWidth
                                error={touched.taskText && Boolean(errors.taskText)}
                                helperText={touched.taskText && errors.taskText}
                            />
                            <Button type="submit" variant="contained" color="primary">
                                Add Task
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    }
}

const mapDispatchToProps = {
    addTask
};

export default connect(null, mapDispatchToProps)(TaskForm);
