var parentList = document.getElementById("parentList");
function add() {
    var input = document.getElementById("input");
    var listElement = document.createElement("li");
    listElement.innerHTML = input.value;
    if (!input.value) {
        alert("Please enter a task");
        return
    }
    parentList.appendChild(listElement)
    input.value = "";

    // Create Edit button Button
    var editButton = document.createElement("button")
    editButton.innerHTML = 'Edit'
    editButton.setAttribute('onClick', 'edit(this)')
    console.log(editButton);

    // Create Delete Button
    var deleteButton = document.createElement("button")
    deleteButton.innerHTML = 'Delete'
    deleteButton.setAttribute('onClick', 'deletetodo(this)')


    listElement.appendChild(editButton)
    listElement.appendChild(deleteButton)
    parentList.appendChild(listElement)
}

function edit(ele) {
    var listvalue = ele.previousSibling.textContent
    var message = prompt('Enter Edit messeage', listvalue)
    if (!message) {
        alert('plz Enter your Edit Message')
        return
    }
    listvalue = message
}
function deletetodo(ele) {
    console.log(ele.parentNode);
    ele.parentNode.remove()
}
function deleteAll() {
parentList.innerHTML = ""    
}