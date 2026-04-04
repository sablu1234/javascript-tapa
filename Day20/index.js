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

//Not part in the main dom tree untill you insert it
//acts like temporary container

const fragment = document.createDocumentFragment();

for(let i = 0; i<=3; i++){
    const li = document.createElement("li");

    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}

document.getElementById("list").appendChild(fragment);


// Range 

const p = document.getElementById("para");
const range = document.createRange();
range.setStart(p.firstChild,6);//After "Hello "
range.setEnd(p.childNodes[2], 4);

const content = range.cloneContents();
console.log(content);


//Shadow DOM
document.querySelector(".card").innerHTML

// Shadow host
const shadowHost = document.querySelector("#box");

const shadow = shadowHost.attachShadow({mode: 'open'});
shadow.innerHTML = `<style>p{color:red;}</style> <p>Hello shadow!</p>`

// Advanced Class Manipulation
const btn = document.querySelector(".btn");

btn.classList.add("active");
btn.classList.remove("disabled");
btn.classList.toggle("active");
btn.classList.replace('active','success');


// Handling large scale Dom Updates

function addItems(count){
    const frag = document.createDocumentFragment();

    for(let i =0; i<count; i++){
        const div =document.createElement('div');

        div.textContent = `Item${i}`;

        frag.appendChild(div);
    }
    document.body.appendChild(frag);
}

// addItems(100);


// Mutation Observer

// const observer = new MutationObserver(callback); 
// observer.observe(targetNode,config);

const watchMe = document.getElementById("watchMe");

const observer = new MutationObserver((mutationList, observer) =>{
console.dir(mutationList);
   for(const mutation of mutationList){
    console.log(`Type of Mutation: ${mutation.type}`);

    if(mutation.type === "childList"){
        console.log("A childnode added or remove");
    }

    if(mutation.type === "attributes"){
        console.log(`Attribute ${mutation.attributeName} was changed`);
    }

    if(mutation.type === "characterData"){
        console.log(`Text content changed to : ${mutation.target.data}`);
    }

   }
});

const config = {
    attributes: true,
     childList: true, 
     subtree: true,
     characterData: true,
}

observer.observe(watchMe, config);

function changeDom(){
    watchMe.textContent = "Goodbye!";
    watchMe.setAttribute ("data-status", "Changed");
}