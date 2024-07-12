import React from "react";
import {connect} from "react-redux";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import TaskListItem from "./TaskListItem";

class TaskList extends React.Component {
  state = {
    filter: "All",
  };

  handleFilterChange = (event) => {
    this.setState({filter: event.target.value});
  };

  filterTasks = (tasks) => {
    const {filter} = this.state;
    if (filter === "Completed") {
      return tasks.filter((task) => task.completed);
    }
    if (filter === "Incomplete") {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  };

  render() {
    const {tasks} = this.props;
    const filteredTasks = this.filterTasks(tasks);

    return (
      <div>
        <div style={{marginBottom : '20px'}}>
          <FormControl fullWidth>
            <InputLabel>Filter</InputLabel>
            <Select
              value={this.state.filter}
              onChange={this.handleFilterChange}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="Incomplete">Incomplete</MenuItem>
            </Select>
          </FormControl>
        </div>
        {filteredTasks.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
});

export default connect(mapStateToProps)(TaskList);
