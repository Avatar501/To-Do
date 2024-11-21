import  { useState } from 'react';
import Board from '../components/Board';
import '../styles.css';

function Home() {
    const [boards, setBoards] = useState([
        { id: 1, name: 'To Do', tasks: [] },
        { id: 2, name: 'In Progress', tasks: [] },
        { id: 3, name: 'Done', tasks: [] },
    ]);

    const addTask = () => {
        setBoards((prevBoards) =>
            prevBoards.map((board) =>
                board.name === 'To Do'
                    ? {
                        ...board,
                        tasks: [...board.tasks, { id: Date.now(), name: 'New Task' }],
                    }
                    : board
            )
        );
    };

    return (
        <div>
            <h2>Welcome to Task Manager</h2>
            <div className="board-container">
                {boards.map((board) => (
                    <Board key={board.id} board={board} />
                ))}
            </div>
            <button onClick={addTask} style={{ margin: '20px auto', display: 'block', width: '200px' }}>
                Add Task to To Do
            </button>
        </div>
    );
}

export default Home;
