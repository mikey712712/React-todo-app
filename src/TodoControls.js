const TodoControls = ({ sortTodos, orderLabel, setListMode }) => {
	const handleClick = (mode) => {
		setListMode(mode)
	}

	return (
		<div className="todo-controls">
			<button className="btn btn-light" onClick={sortTodos}>
				{orderLabel}
			</button>
			<button className="btn btn-light" onClick={() => handleClick("pending")}>
				Show Pending
			</button>
			<button className="btn btn-light" onClick={() => handleClick("complete")}>
				Show Completed
			</button>
			<button className="btn btn-light" onClick={() => handleClick("all")}>
				Show All
			</button>
		</div>
	)
}

export default TodoControls
