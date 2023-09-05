let todoList = [];

function addTodo() {
  let inputElement = document.querySelector('.js-input');

  let name = inputElement.value;

  // if (name === '') return alert('Please enter a task!');
  
  todoList.push(name);

  console.log(todoList);

  inputElement.value = '';
}