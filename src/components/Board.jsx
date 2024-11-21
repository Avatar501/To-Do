import PropTypes from 'prop-types';
import '../styles.css';

function Board({ board }) {
    return (
        <div className="board">
            <h3>{board.name}</h3>
            {board.tasks.map((task) => (
                <div key={task.id}>{task.name}</div>
            ))}
            <button>Add Task</button>
        </div>
    );
}

Board.propTypes = {
    board: PropTypes.shape({
        name: PropTypes.string.isRequired,
        tasks: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default Board;
