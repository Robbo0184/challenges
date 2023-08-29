console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');
const ul = document.querySelector('#ul')







const makeListItem = (data) => {
    const dataForm = data; 
    const listItem = document.createElement('li');
    ul.append(listItem);
    const headline = document.createElement('h1');
    headline.innerText = dataForm.headline;
    listItem.append(headline); 
    const task = document.createElement('p');
    task.innerText = dataForm.task;
    listItem.append(task); 
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(e.target);
    const dataForm = Object.fromEntries(data);
    console.log(dataForm.headline)
    console.log('dataForm:', dataForm)
    makeListItem(dataForm)
    form.reset()
    document.getElementById('headline').focus()

})