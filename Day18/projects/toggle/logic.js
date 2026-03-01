console.log('Project:Toggle');

function toggleInfo(){
    console.log('toggle');
    const para = document.getElementById('myParagraph');

    para.classList.toggle("hidden");
}