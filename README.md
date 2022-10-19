# React Todo App

### Getting Started 
1. Fork this repo and `git clone` it down to your computer.
1. Run `npm i` to install the ~~universe~~ dependencies.
1. When you're finished or when time is up, push your work to your remote repo, file a Pull Request, and react with a green check on Zoom.

---

### Technical Requirements
- Todo items should have a unique id. You can use [uniqid](https://www.npmjs.com/package/uniqid) or [uuidv4](https://www.npmjs.com/package/uuidv4).
- Todo items should have a required title field. You should not be able to create blank todos.
- Todo items should have an optional details field.
- On submitting the form:
  - the page should **NOT** refresh.
  - a new todo item should render below the form.
  - the input fields should be emptied.
- Todo items should have a done button that deletes it when clicked.
  
#### Stretch Goals
- Instead of deleting a completed todo, mark it as done visually. Look at [todomvc.com](https://todomvc.com/examples/react/#/) for ideas.
- Add a way to sort todos, most recently added on top.
- Add filters for the todo list. A user should be able to just their pending todos or all their completed todos.

### Working Version
You can find a [working version of this Todo App here](https://sei-react-todo-app.netlify.app).

### HTML Structure
Once fully rendered, your App component's html should look like this:

``` html
<div class="container">
  <form>
    <div class="form-floating mb-3">
      <input name="title" type="text" required class="form-control" id="title" value="">
      <label class="form-label" for="title">watdo?</label>
    </div>
    <div class="mb-3">
      <label class="form-label" for="details">Deets</label>
      <textarea name="details" class="form-control" id="details" rows="3"></textarea>
    </div>
    <input class="btn btn-light" type="submit" value="Add Todo">
  </form>

  <div class="todo-list">
    <div class="todo-item">
      <h5>Create Todo App</h5>
      <p>Use React</p>
      <button type="button" class="btn btn-light">✓ done</button>
    </div>
    <div class="todo-item">
      <h5>Order lunch</h5>
      <p>UberEats?</p>
      <button type="button" class="btn btn-light">✓ done</button>
    </div>
  </div>
</div>
```
