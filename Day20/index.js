console.log("Day 20: Advance dom tips");

// domtraversal
const firstChild = parent.firstElementChild;
console.log(firstChild);

// Templates and cloning

const template = document.getElementById("card-template");;
const clone = template.content.cloneNode(true);
clone.querySelector(".title").textContent = "Dom Advance Topic";
clone.querySelector(".desc").textContent = "Hope your are learning something new";

document.body.appendChild(clone);


// Document Fragements
