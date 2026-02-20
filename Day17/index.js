// dom type
    // 1. Document - represent the entire page and it is the root of the DOM tree
    console.log(document);
    console.log(document.head);
    console.log(document.title);
    console.log(document.URL);

    // 2. node - A generic term for any elemnts in the DOM tree. Element node, text node, text node, attribute node.
    // 3. element - A specific type of node the represents an html elements.
    // 4. NodeList - An array of nodelist
    // Attr - Represent the attribute of a node.
        // <img src="/" alt="some image">
    // NameNodeMap - A collection of Attributes.


    // Accessing DOM 
    // By ID
    let titleElem = document.getElementById("heading");
    console.log(titleElem);

    // By class name
    let infoElems =document.getElementsByClassName("info");
    console.log(infoElems);
    console.log(infoElems[0],infoElems[1]);

    [...infoElems].forEach((elem)=>{
        console.log(elem);
    });


    // By Tag name
    let pTagElems = document.getElementsByTagName("p");
    console.log("using getElementsByTagName",pTagElems);

    // Selectors - QuerySelector and QuerySelectorAll

    // By Query Selector - querySelector()

    let para = document.querySelector("p.info");
    console.log("Using query selctor",para);

    let paras = document.querySelectorAll("p.info");
    console.log("Using query selctor all",paras);

    let hOne = document.querySelector("#heading");
    console.log("Using query selctor with id",hOne);



    // Dom accessing

    // 1. getElemntById(id)
    // 2. getElementsByClassName(className)
    // 3. getElementsByTagName(tagName)
    // 4. querySelector(cssSelector)
    // 5. querySelectorAll(cssSelector)


    // Mini project - 1 Highliter application


    function highlightText() {
        console.log("About to highlight text......................");

         let elements = document.querySelectorAll("p.info");

         elements.forEach((element) => {
            element.style.backgroundColor = "yellow";
         });
    }
    

    function filterList(){
        const inputElem = document.getElementById("searchInput");
        const input = inputElem.value;
        
        const items = document.querySelectorAll("ul#itemList li");

        items.forEach((item)=>{
           item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
        })
    }