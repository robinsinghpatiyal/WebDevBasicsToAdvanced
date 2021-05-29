
let todoList = [];
let count = 0;
let loop = true;
while (loop != false) {
    let option = prompt("Enter the Command")
    option = option.toLowerCase();
    switch (option) {
        case 'new':
            let task = prompt("Enter the task you want to add to the list");
            todoList[count] = task;
            count++;
            // console.log(todoList);
            break;
        case 'list':
            for (let i = 0; i < todoList.length; i++) {
                console.log(`[${i}] : ${todoList[i]}`);
            }

            break;

        case 'delete':
            let pos = prompt("Enter the index of the value that you want to delete")
            todoList.splice(pos, 1);
            break;
        case 'quit':
            loop = false;

            break;
    }
}