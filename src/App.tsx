import React from 'react';
import './App.css';
import {Todolist} from './ToDoList'

function App() {
    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]
    return (
        <div className="App">
                    <Todolist title={'What to learn11111'} name={1111} tasks={tasks1}/>
                    <Todolist title={'What to learn22222'} tasks={tasks2}/>
        </div>
    );
}

function Star() {
    return (
        <div>star</div>
    )
}

export default App;
