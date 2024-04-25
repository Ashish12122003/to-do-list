function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Please enter a task!");
        return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));

    var deleteButton = document.createElement("span");
    deleteButton.appendChild(document.createTextNode("\u00D7"));
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
        var li = this.parentElement;
        li.remove();
    };
    li.appendChild(deleteButton);

    ul.appendChild(li);
    document.getElementById("taskInput").value = "";
}
