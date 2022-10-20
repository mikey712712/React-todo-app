import { useState } from "react"
import TodoControls from "./TodoControls"
import Todo from "./Todo"

export default function TodoList({ todos, setTodos }) {
	const [orderLabel, setLabel] = useState("Sort by Oldest")
	const [listMode, setListMode] = useState("all")

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
		<div className="todo-list">
			<TodoControls sortTodos={sortTodos} orderLabel={orderLabel} listMode={listMode} setListMode={setListMode} />
			{listMode === "all" ? todosList : listMode === "pending" ? pendingTodosList : listMode === "complete" ? completedTodosList : null}
		</div>
	)
}
