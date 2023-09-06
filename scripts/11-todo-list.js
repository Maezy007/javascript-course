let todoList = ['maker dinner', 'wash dishes'];

let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
  let todo = todoList [i]
  const html = `<p>${todo}</p>`;
  todoListHTML += html;
}

function addTodo() {
  let inputElement = document.querySelector('.js-input');

  let name = inputElement.value;

  // if (name === '') return alert('Please enter a task!');
  
  todoList.push(name);

  console.log(todoList);

  inputElement.value = '';
}