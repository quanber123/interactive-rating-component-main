const containerRate = document.querySelectorAll(".rate");
const submitBtn = document.querySelector(".submit-btn");
const rateagainBtn = document.querySelector(".rate-again-btn");
const ratingState = document.querySelector(".rating-state");
const voteForm = document.querySelector(".vote-form");
const thankForm = document.querySelector(".thank-form");

submitBtn.addEventListener('click', function () {
    thankForm.classList.remove("hidden");
    thankForm.style.display = "flex";
    voteForm.style.display = "none";
});

rateagainBtn.addEventListener('click', function(){
    thankForm.classList.add("hidden");
    thankForm.style.display ="none";
    voteForm.style.display = "flex";
})

containerRate.forEach(function(rate){
    rate.addEventListener('click', function(){
        ratingState.innerHTML = `You selected ${rate.innerHTML} out of 5`;
    })
})