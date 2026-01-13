import './Todo.css'
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "./API/TodoAppService"
import HeaderComponenet from "./HeaderComponent";
import FooterComponenet from "./FooterComponent";
import { useEffect, useState } from 'react';
import { useAuth } from './Security/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function ListTodosComponenet() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const authcontext = useAuth()

    const username = authcontext.username

    const Navigate = useNavigate()

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState()

    useEffect(
        () => refreshTodos(), []
    )

    function refreshTodos() {
        retrieveAllTodosForUsernameApi(username, authcontext.token)
            .then(response => {
                setTodos(response.data)
            })
            .catch(error => console.log(error))
    }

    function deleteTodo(id) {
        console.log("clicked" + id)
        deleteTodoApi(username, id)
            .then(
                () => {
                    setMessage(`Deleted Task with ${id} successfully`)
                    refreshTodos()
                }

            )
            .catch(error => console.log(error))


    }

    function updateTodo(id) {
        console.log("clicked" + id)
        Navigate(`/todo/${id}`)

    }

    function addNewTodo() {
        Navigate(`/todo/-1`)

    }

    return (
        <div className="container my-5">
            <HeaderComponenet />

            <div className="card shadow-sm mb-4 border-0">
                <div className="card-body text-center">
                    <h1 className="card-title fw-bold text-primary">Things You Want To Do</h1>
                </div>
            </div>

            {message && <div className="alert alert-warning text-center">{message}</div>}

            <div className="card shadow border-0">
                <div className="card-body p-0">
                    <table className="table table-hover mb-0">
                        <thead className="table-primary">
                            <tr className="text-center">
                                <th>Description</th>
                                <th>Status</th>
                                <th>Target Date</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map(todo => (
                                    <tr key={todo.id} className="text-center align-middle">
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>
                                            <button className="btn btn-outline-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
                                                <i className="bi bi-trash3-fill me-1"></i>Delete
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-outline-success btn-sm" onClick={() => updateTodo(todo.id)}>
                                                <i className="bi bi-pencil-square me-1"></i>Update
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="text-center mt-4">
                <button className="btn btn-success px-4 py-2" onClick={addNewTodo}>
                    <i className="bi bi-plus-circle me-2"></i>Add New Task
                </button>
            </div>

            <FooterComponenet />
        </div>

    )
}