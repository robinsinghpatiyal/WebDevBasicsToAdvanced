const form = document.querySelector('#userForm');
const listItems = document.querySelector('ul');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = form.elements.username;
    const task = form.elements.task;
    appending(username, task);
    username.value = '';
    task.value = '';
});


const appending = (username, task) => {
    const li = document.createElement('li');
    const b = document.createElement('b');
    b.append(username.value);
    li.append(b);
    li.append(` -- ${task.value}`);
    listItems.append(li);
}