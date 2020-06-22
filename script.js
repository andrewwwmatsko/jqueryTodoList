const $todoInput= $(".todo-creator")
const $todoButton =$(".add-todo-button")
const $todoList=$(".todo-items")

$todoButton.on("click", function(e){
    e.preventDefault();
    $todoList.append(`<div class="todo">
        <li class="todo-item">${$todoInput.val()}</li>
        <button class="complete-button"><i class="fas fa-check"></i></button>
        <button class="trash-button"><i class="fas fa-trash"></i></button>
    </div>`)
    $todoInput.val("")
})
$todoList.on("click",function(e){
    const $parent=$(e.target).parent()
    if($(e.target).hasClass("trash-button")){
        $parent.addClass("falling")
    setTimeout(function(){
        $parent.remove()
    },500)
    } else if($(e.target).hasClass("complete-button")) {
        $parent.addClass("completed")
    }
    
})

