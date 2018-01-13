import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoList.css';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.TodoList}>
                <ul>{this.props.data.map(item => (
                    <Todo key={item.id} todo={item} removeHandler={this.props.remove}/>
                ))}</ul>
            </div>
        );
    }
}

TodoList.propTypes = {
    remove: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
};

export default TodoList;