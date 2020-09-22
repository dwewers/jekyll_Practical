// // var button = document.getElementById("enter");
// // var input = document.getElementById("input");
// // var ul = document.querySelector("ul");

// // function inputLength() {
// //   return input.value.length;
// // }

// // function createListElement() {
// //   var li = document.createElement("li");
// //   li.appendChild(document.createTextNode(input.value));
// //   ul.appendChild(li);

// //   li.addEventListener("click", function () {
// //     //if the list item is clicked, this toggles the done class
// //     var finished = this.classList.toggle("done");
// //     //creates a remove button for the finished item:
// //     var removeButton = document.createElement("button");
// //     removeButton.classList.add("deleteButton");

// //     //If the list item is clicked (li add event listner) then finished if true
// //     if (finished) {
// //       removeButton.appendChild(document.createTextNode("remove"));
// //       removeButton.classList = "deleteButton";
// //       li.appendChild(removeButton);
// //       removeButton.addEventListener("click", function () {
// //         this.parentElement.remove();
// //       });
// //     } else {
// //       this.getElementsByClassName("deleteButton")[0].remove();
// //     }
// //     //revert input value back to nothing
// //     input.value = "";
// //   });
// //   function addListAfterClick(){
// //       if (inputLength() > 0)
// //   }
// // }

// var button = document.getElementById("enter")                   // set 'button' var as element with 'enter' id
// var input = document.getElementById("input")                    // set 'input' var as element with 'input' id
// var ul = document.querySelector("ul")                           // set 'ul' var as first listed ul element
// function inputLength() {                                        // create inputLength func
//     return input.nodeValue.length;                                  //return length of input vars element value
// }
// function createListElemnet() {                                  // create createListElement func
//     var li = document.createElement("li");                          // set 'li' var as a new li element 
//     li.appendChild(document.createTextNode(input.value));           // adds value of input var's element to li vars element value
//     ul.appendChild(li);                                             // adds li var's element to ul vars element's value
//     li.addEventListener("click", function () {                      // listen for click event on li element
//         var finished = this.classList.toggle("done")
//         var removeButton = document.createElement("button");
//         removeButton.classList.add("deleteButton");
//         if (finished) {
//             removeButton.appendChild(document.createTextNode("remove"))
//             removeButton.classList = "deleteButton"
//             li.appendChild(removeButton)
//             removeButton.addEventListener("click", function () {
//                 this.parentElement.remove()
//             })
//         } else {
//             this.getElementsByClassName("deleteButton")[0].remove();
//         }
//     });
//     input.value = ""
// }
// function addListAfterClick(){
//     if (inputLength() > 0){
//         createListElemnet();
//     }
// }
// function addListAfterPress(event){
//     if (inputLength() > 0 && event.KeyCode === 13){
//         createListElemnet();
//     }
// }
// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterPress)

var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	li.addEventListener("click", function () {
		// creates a boolean that toggles the done class on li:
		// if the list item is clicked this toggles the done class
		var finished = this.classList.toggle("done");
		// creates a remove button for the finished item:
		var removeButton = document.createElement("button");
		removeButton.classList.add("deleteButton");

		// if the list item is clicked (li add event listener ) then
		// finished is true
		if (finished) {
			removeButton.appendChild(document.createTextNode("remove"));
			removeButton.classList = "deleteButton";
			li.appendChild(removeButton);

			removeButton.addEventListener("click", function () {
				this.parentElement.remove();
			});
		} else {
			this.getElementsByClassName("deleteButton")[0].remove();
		}
	});
	// revert input value back to nothing
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterPress);