
const faq = document.querySelector(".faq");

faq.addEventListener("click", function(e) {
    
    const currenItem = e.target.parentElement;
    const currentAnswer = currenItem.querySelector(".answer");

    currentAnswer.classList.toggle("show")

})


document.addEventListener("click", function(){
    const allAnswers = document.querySelectorAll(".answer.show");
    allAnswers.forEach(answer => answer.classList.remove("show"))
})