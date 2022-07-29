const ratingBtns = document.querySelectorAll("#rating-numbers button")
const submitBtn = document.querySelector("#submit-btn")
const ratingNumber = document.querySelector("#rating-number")
const container = document.querySelector(".container")
const ratingScore = document.querySelector(".rating-Score")

let activeState = [false, false, false, false, false]

function clickListener(i){
    for(let j = 0; j<activeState.length; j++){
        activeState[j] = false
    }
    activeState[i] = true;   
}

ratingBtns[0].addEventListener("click",()=>{clickListener(0)})
ratingBtns[1].addEventListener("click",()=>{clickListener(1)})
ratingBtns[2].addEventListener("click",()=>{clickListener(2)})
ratingBtns[3].addEventListener("click",()=>{clickListener(3)})
ratingBtns[4].addEventListener("click",()=>{clickListener(4)})

submitBtn.addEventListener("click",()=>{
    if(activeState[0] === true){
        ratingNumber.textContent = "1"
        container.style.display = "none"
        ratingScore.style.display = "flex"
        console.log("1")
    }else if (activeState[1] === true){
        ratingNumber.textContent = "2"
        container.style.display = "none"
        ratingScore.style.display = "flex"
        console.log("2")
    }else if (activeState[2] === true){
        ratingNumber.textContent = "3"
        container.style.display = "none"
        ratingScore.style.display = "flex"
        console.log("3")
    }else if (activeState[3] === true){
        ratingNumber.textContent = "4"
        container.style.display = "none"
        ratingScore.style.display = "flex"
        console.log("4")
    }else if (activeState[4] === true){
        ratingNumber.textContent = "5"
        container.style.display = "none"
        ratingScore.style.display = "flex"
        console.log("5")
    }else {
        alert("Please Select a number")
    }
    
    
    

})


