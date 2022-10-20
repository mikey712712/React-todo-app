import { useState } from "react"
import uniqid from "uniqid"
import "./App.css"
import Todo from "./Todo"
import TodoControls from "./TodoControls"

export default function App() {
	const defaultFields = {
		title: "",
		details: "",
	}
	const [fields, setFields] = useState(defaultFields)
	const [todos, setTodos] = useState([])
	const [orderLabel, setLabel] = useState("Sort by Oldest")
	const [listMode, setListMode] = useState("all")

	const handleChange = (event) => {
		const { name, value } = event.target
		setFields({
			...fields,
			[name]: value,
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const newTodo = {
			...fields,
			id: uniqid(),
			status: "pending",
		}
		setTodos([newTodo, ...todos])
		setFields(defaultFields)
	}

	const sortTodos = () => {
		if (orderLabel === "Sort by Oldest") {
			setLabel("Sort by Recent")
			setTodos([...todos].reverse())
		} else {
			setLabel("Sort by Oldest")
			setTodos([...todos].reverse())
		}
	}

	const todosList = todos.map((todo) => (
		<Todo todos={todos} setTodos={setTodos} title={todo.title} details={todo.details} id={todo.id} status={todo.status} />
	))

	const pendingTodosList = todos
		.filter((todo) => todo.status === "pending")
		.map((todo) => <Todo todos={todos} setTodos={setTodos} title={todo.title} details={todo.details} id={todo.id} status={todo.status} />)

	const completedTodosList = todos
		.filter((todo) => todo.status === "complete")
		.map((todo) => <Todo todos={todos} setTodos={setTodos} title={todo.title} details={todo.details} id={todo.id} status={todo.status} />)

	return (
		<div class="container">
			<form onSubmit={handleSubmit}>
				<div class="form-floating mb-3">
					<input name="title" type="text" required class="form-control" id="title" onChange={handleChange} value={fields.title} />
					<label class="form-label" for="title">
						watdo?
					</label>
				</div>
				<div class="mb-3">
					<label class="form-label" for="details">
						Deets
					</label>
					<textarea name="details" class="form-control" id="details" rows="3" onChange={handleChange} value={fields.details}></textarea>
				</div>
				<input class="btn btn-light" type="submit" value="Add Todo" />
			</form>

			<div class="todo-list">
				<TodoControls sortTodos={sortTodos} orderLabel={orderLabel} listMode={listMode} setListMode={setListMode} />
				{listMode === "all" ? todosList : listMode === "pending" ? pendingTodosList : listMode === "complete" ? completedTodosList : null}
			</div>
		</div>
	)
}
