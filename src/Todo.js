export default function Todo({ title, details, id, setTodos, status, todos }) {
	const handleTodoDone = () => {
		const updatedTodos = [...todos]
		for (let todo of updatedTodos) {
			if (todo.id === id) {
				todo.status = "complete"
			}
		}
		setTodos(updatedTodos)
	}

	return (
		<div class="todo-item">
			<h5>{title}</h5>
			<p>{details}</p>
			{status === "pending" ? (
				<div class="status btn btn-light">Pending</div>
			) : status === "complete" ? (
				<div class="status btn btn-success">✓ Completed</div>
			) : null}
			{status === "pending" ? (
				<button type="button" class="btn btn-dark" onClick={handleTodoDone}>
					Mark as Complete
				</button>
			) : null}
		</div>
	)
}
