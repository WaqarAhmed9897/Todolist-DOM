var ulContainer = document.getElementById('parent')
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
    // li ko Class di he
    listElement.setAttribute('class', 'list')
    // Create Edit button Button
    var editButton = document.createElement("button")
    editButton.innerHTML = '<i class="fas fa-edit"></i> Edit'
    editButton.setAttribute('onClick', 'edit(this)')
    editButton.setAttribute('class', 'btn btn-warning mx-3')
    // Create Delete Button
    var deleteButton = document.createElement("button")
    deleteButton.innerHTML = '<i class="fas fa-trash"></i> Delete'
    deleteButton.setAttribute('onClick', 'deletetodo(this)')
    deleteButton.setAttribute('class', 'btn btn-danger')

    //Create Completed Button
    var completeButton = document.createElement("button")
    completeButton.innerHTML = '<i class="fas fa-check-circle"></i> Completed'
    completeButton.setAttribute('class', 'btn btn-success')
    completeButton.style.marginLeft = '3px'
    completeButton.setAttribute('onClick', 'completedtodo(this)')


    listElement.appendChild(editButton)
    listElement.appendChild(deleteButton)
    listElement.appendChild(completeButton)
    parentList.appendChild(listElement)
}

function edit(ele) {
    var listvalue = ele.previousSibling.textContent
    var message = prompt('Enter Edit messeage', listvalue)
    if (!message) {
        alert('plz Enter your Edit Message')
        return
    }
    ele.previousSibling.textContent = message
}
function deletetodo(ele) {
    console.log(ele.parentNode);
    ele.parentNode.remove()
}
function deleteAll() {
    parentList.innerHTML = ""
}
function completedtodo(ele) {
    // console.log(ele.previousSibling.previousSibling.previousSibling);
    // ele.previousSibling.previousSibling.previousSibling
    // btn.parentNode.className = "liLine";
    ele.parentNode.className = 'lilist'
    
}