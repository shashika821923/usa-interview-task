import React from 'react';
import { connect } from 'react-redux';
import { Button, ListItem, ListItemText, Checkbox } from '@material-ui/core';
import { deleteTask, toggleTask } from '../redux/actions/taskActions';

class TaskListItem extends React.Component {
    render() {
        const { task, deleteTask, toggleTask } = this.props;

        return (
            <ListItem>
                <Checkbox
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
                <ListItemText
                    primary={task.text}
                    secondary={`Created at: ${new Date(task.createdAt).toLocaleString()}`}
                    style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                />
                <Button variant="contained" color="secondary" onClick={() => deleteTask(task.id)}>
                    Delete
                </Button>
            </ListItem>
        );
    }
}

const mapDispatchToProps = {
    deleteTask,
    toggleTask
};

export default connect(null, mapDispatchToProps)(TaskListItem);
