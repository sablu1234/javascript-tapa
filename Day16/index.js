<<<<<<< HEAD
=======

>>>>>>> 3094b8a05a101dade2862f40f7ffce9d8a7dbbc1
const print = function() {
    const name = document.getElementById("m_name").value;
    const wish = document.getElementById("m_wish").value;

    const message = 'Hello ' 
        + name 
        + ', your wish "' 
<<<<<<< HEAD
        + wish 
=======
        + + wish 
>>>>>>> 3094b8a05a101dade2862f40f7ffce9d8a7dbbc1
        + '" may come true 😊';

    logger(message);

    document.getElementById("output").innerHTML =
        '<span class="message">' + message + '</span>';
}

const logger = function(text){
    console.log("******I am a logger function*****");
    console.log(text);
}
