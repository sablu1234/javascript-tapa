// CreATE  element
{
    // const pElem =document.createElement("p");
    // console.log(pElem);
    // pElem.innerText = "This is a text added dynamically";

    // document.body.appendChild(pElem);

    // console.log(pElem);

}

// insert elements
// const span = document.createElement('span');
// span.innerText = 'I am a span';

// const pElem2 = document.querySelector('p');

// console.log(pElem2.nextElementSibling);

// document.body.insertBefore(span, pElem2.nextElementSibling);

// Modifying content
{
    // const pElem = document.querySelector('p');
    // pElem.innerHTML = "<u>Hello how</u> are you doing?";
    // const divElem = document.querySelector('div');
    // console.log('Inner Text', divElem.innerText); 
    // console.log('Inner HTML', divElem.textContent); 
}


// Removing content

{
    const pElem =document.querySelector("p");
    const h1Elem =document.querySelector("h1");

    const list = document.getElementById("mylist");
    itemToRemove = list.children[0];
    // list.removeChild(itemToRemove);

    list.replaceChildren(pElem,h1Elem);

    document.getElementById('removeMe').remove();

}


// Read write and remove attributes
{
    /*
    const imageElem = document.querySelector('img');

    console.log(imageElem.getAttribute('src'));
    imageElem.setAttribute("src", "image.jpg");
    imageElem.setAttribute("alt", "Banner image");
    imageElem.setAttribute("alt", "Banner image");
    imageElem.removeAttribute('height');
    console.log(imageElem.hasAttribute('alt'));//true
    */

}


// Travarsing/Navigating the DOM
{
    // parentElement and parentNode
    const span = document.getElementById("text");

    console.log("Parent Element", span.parentElement.parentElement);
    console.log("Parent Node", span.parentNode.parentNode);

    // children and childNodes
    const main = document.getElementById("main-id");
    // console.log("children", main.children);

    // console.log("childNodes", main.childNodes);
    // console.log('Frist child', main.firstChild);
    // console.log('Frist Child Element', main.firstElementChild);


    // nextSibling
    //nextElementSibling
    //previousSibling
    //previousElementSibling

}

// Manipulating styles
{
    // const pElem = document.getElementById('p-id');
    // console.log(pElem.style);
    // pElem.style.backgroundColor = "pink";
}

// Manipulating classes
{
    const mainDivElem = document.getElementById('main-id');
    // console.log(mainDivElem.className);
    // mainDivElem.className = "secondary-class";
    // console.log(mainDivElem.className);

    console.log(mainDivElem.classList);

    mainDivElem.classList.add('test');
    mainDivElem.classList.remove('layout');
    mainDivElem.classList.replace('main-class', 'secondary-class');
    console.log("Does it have test?", mainDivElem.classList.contains('test'));
    console.log("Does it have test?", mainDivElem.classList.contains('main-class'));

    mainDivElem.classList.toggle('test');
    mainDivElem.classList.toggle('test');

    
}


// Controlling Visibility
{
    const mainDivElem = document.getElementById('main-id');
    // mainDivElem.style.display = "none";
    // mainDivElem.style.visibility = "hidden";
    mainDivElem.style.opacity = ".5";
}