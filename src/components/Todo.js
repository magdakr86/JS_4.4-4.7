import React from 'react';
import style from './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
        const {text, id } = this.props.todo;
        return (
            <li>
                {text}
                <button className="removeButton" onClick={()=> this.props.removeHandler(id)}>Delete</button>
            </li>
        );
    }
}

export default Todo;