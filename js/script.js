/* Tried to write minimal JS */

// function for Shuffle cards randomaly
let shuffle = () => {

    let parent = document.getElementById("cards");
    let frag = document.createDocumentFragment();
    while (parent.children.length) {
        frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
    }
    parent.appendChild(frag);
}

// function for sorting cards in ascending order 1 - 9
let sort = () => {
    var nodes = cards.children,
        i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = nodes.sort((i, j) => Number(i.innerText) - Number(j.innerText));
    for (i = 0; i < nodes.length; i++) {
        cards.appendChild(nodes[i]);

    }
}