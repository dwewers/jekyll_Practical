var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    li.addEventListener('click', function(){
        var finished = this.classList.toggle("done");
        var removeButton = document.createElement("button");
        removeButton.classList.add("deleteButton")
    })
}