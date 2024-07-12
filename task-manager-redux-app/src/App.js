// src/App.js
import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
    return (
        <Provider store={store}>
            <Container maxWidth="sm">
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Task Manager
                </Typography>
                <TaskForm />
                <TaskList />
            </Container>
        </Provider>
    );
};

export default App;
