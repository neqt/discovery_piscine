let todoList = document.getElementById("ft_list");
let x = document.cookie;

if (x.length > 0) {
  x = x.split(";");
  x.forEach((l) => {
    l = l.split("=");
    CreatNewList(l[0], l[1]);
  });
}

function newButton() {
  let list = prompt("Enter to do list : ");
  if (list.trim() != "") {
    let id = new Date().getTime();
    document.cookie = id + "=" + list + ";";
    CreatNewList(id, list);
  }
}

function CreatNewList(id, l) {
  let todo = document.createElement("button");
  todo.type = "button";
  todo.innerHTML = l;
  todo.onclick = () => {
    if (confirm("Click OK to delete") == true) {
      todo.remove();
      document.cookie = id + "=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  };

  todoList.prepend(todo);
}
