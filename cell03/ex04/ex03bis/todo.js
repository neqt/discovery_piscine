let todoList = $("#ft_list");
let x = document.cookie;

$(document).ready(function () {
  if (x.length > 0) {
    x = x.split(";");
    x.forEach((txt) => {
      CreatNewList(txt.split("=")[0], txt.split("=")[1]);
    });
  }

  $("#newButton").click(() => {
    let list = prompt("Enter to do list : ");
    if (list.charAt(0) != "") {
      let id = new Date();
      dat = id.setTime(id.getTime());
      document.cookie = dat + "=" + list + ";";
      CreatNewList(dat, list);
    }
  });

  function CreatNewList(dat, txt) {
    const todo = $("<button type='button'></button>").text(txt);
    todo.click(() => {
      if (confirm("Click OK to delete") == true) {
        todo.remove();
        document.cookie = dat + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
      }
    });
    todoList.prepend(todo);
  }
});
