import React from 'react';
import style from './Title.css';

class Title extends React.Component {
    
    render() {
        return (
            <div className={style.TodoTitle}>
                <h1> Todo list: ({this.props.todoCount}) </h1>
            </div>
        );
    }
}

export default Title;