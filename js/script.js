// function multiplyNode(node, count, deep) {
//     for (var i = 0, copy; i < count - 1; i++) {
//         copy = node.cloneNode(deep);
//         node.parentNode.insertBefore(copy, node);
//     }
// }

// multiplyNode(document.querySelector('.card'), 9, true);

// var toAdd = document.createDocumentFragment();
// for (var i = 0; i < 11; i++) {
//     var newDiv = document.createElement('div');
//     newDiv.id = 'r' + i;
//     newDiv.className = 'ansbox';
//     toAdd.appendChild(newDiv);
// }

// document.appendChild(toAdd);

// for (x = 0; x < 9; x++) {
//     var board = document.createElement('div');
//     board.className = "blah";
//     document.getElementById('board').appendChild(board);
// }

// (function() {
//     "use strict";

//     function createDiv() {
//         var boardDiv = document.createElement("div");

//         boardDiv.className = "new-div";
//         boardDiv.innerText = "I am new DIV";

//         return boardDiv;
//     }

//     function createAndModifyDivs() {
//         var board = document.getElementById("cards"),
//             myDivs = [],
//             i = 0,
//             numOfDivs = 9;

//         for (i; i < numOfDivs; i += 1) {
//             myDivs.push(createDiv());
//             board.appendChild(myDivs[i]);
//         }

//         myDivs[5].className = "modified-div";
//         myDivs[5].innerText = "I'm modified DIV";
//     }

//     createAndModifyDivs();

// }());



// function shuffle(cards) {

//     for (var i = 0; i < 9; i++) {
//         var location1 = Math.floor((Math.random()));
//         var location2 = Math.floor((Math.random()));
//         var tmp = cards[location1];

//         deck[location1] = cards[location2];
//         deck[location2] = tmp;
//     }
// }

// let container = document.querySelector(".cards");
// let divsList = document.querySelectorAll("div");
// // console.log(container);
// // console.log(divsList);

// function shuffle() {

//     let divCopy = divsList[9].cloneNode(true);

//     while (divCopy.length > 0) {
//         //chose random index of div array
//         var randomIndex = Math.floor(Math.random() * divsList.length);

//         container.append(divCopy.splice(randomIndex, 1));
//     }

// }

// let nodes = document.querySelectorAll('.cards');
// console.log(nodes);
// for (let i = 0; i < nodes.length; i++) {

//     if (nodes[i].querySelector('div')) {

//         nodes[i].querySelector('div').style.color = 'red';

//     }

// }
const shuffle = () => {

    var parent = document.getElementById("cards");
    var frag = document.createDocumentFragment();
    while (parent.children.length) {
        frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
    }
    parent.appendChild(frag);
}

function sort() {


}