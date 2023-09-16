let todoList = [];

renderTodo();

function renderTodo() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    let todoObj = todoList[i];

    // const name = todoObj.name;
    // const dueDate = todoObj.dueDate;
    const { name, dueDate } = todoObj;

    const html =
      `
      <div>${name}</div>
      <div>${dueDate}</div>

        <button onclick="
          todoList.splice(${i}, 1)
          renderTodo();
        ">Delete</button> 
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo').innerHTML = todoListHTML;
}

function addTodo() {
  let inputElement = document.querySelector('.js-input');
  let name = inputElement.value;

  const dateInput = document.querySelector('.js-input1');
  const dueDate = dateInput.value;
  //   console.log('day:', typeof day === "number");

  // if (name === '') return alert('Please enter a task!');

  todoList.push({
    //name: name,
    //day: day

    name,
    dueDate
  });

  console.log(todoList);

  inputElement.value = '';
  dateInput.value = '';

  // Show the todo list container once a todo is added
  // document.querySelector('.js-todo-container').style.display = 'block';

  renderTodo();
}