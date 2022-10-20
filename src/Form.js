import { useState } from "react"
import uniqid from "uniqid"

export default function Form({ todos, setTodos }) {
	const defaultFields = {
		title: "",
		details: "",
	}
	const [fields, setFields] = useState(defaultFields)

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

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-floating mb-3">
				<input name="title" type="text" required className="form-control" id="title" onChange={handleChange} value={fields.title} />
				<label className="form-label" for="title">
					watdo?
				</label>
			</div>
			<div className="mb-3">
				<label className="form-label" for="details">
					Deets
				</label>
				<textarea name="details" className="form-control" id="details" rows="3" onChange={handleChange} value={fields.details}></textarea>
			</div>
			<input className="btn btn-light" type="submit" value="Add Todo" />
		</form>
	)
}
