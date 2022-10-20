import Todo from "./Todo"

const TodoControls = ({ sortTodos, orderLabel, setListMode }) => {
	const handleClickPending = () => {
		setListMode("pending")
	}

	const handleClickComplete = () => {
		setListMode("complete")
	}

	const handleClickAll = () => {
		setListMode("all")
	}

	return (
		<div className="todo-controls">
			<button className="btn btn-light" onClick={sortTodos}>
				{orderLabel}
			</button>
			<button className="btn btn-light" onClick={handleClickPending}>
				Show Pending
			</button>
			<button className="btn btn-light" onClick={handleClickComplete}>
				Show Completed
			</button>
			<button className="btn btn-light" onClick={handleClickAll}>
				Show All
			</button>
		</div>
	)
}

export default TodoControls
