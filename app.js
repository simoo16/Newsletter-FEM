let userInput = document.getElementById("mail-in");
let submitBtn = document.getElementById("submit-btn");
let errorMessage = document.querySelector(".error-message");
let docLeftSide = document.querySelector(".left-side");
let docRightSide = document.querySelector(".right-side");
submitBtn.addEventListener("click", () => {
    let inputToArr = userInput.value.split("")
    if(userInput.value.length == 0){
      errorMessage.textContent = "You Must Write Something !"
      errorMessage.style = "display: inline-block;"
      userInput.style = "background-color: hsla(4, 100%, 67%, 0.33); color: hsl(4, 100%, 67%); border: 1px solid hsl(4, 100%, 67%);"
    }else if(!inputToArr.includes("@") || !inputToArr.includes(".")){
        errorMessage.textContent = "Valid Email Required"
        errorMessage.style = "display: inline-block;"
        userInput.style = "background-color: hsla(4, 100%, 67%, 0.33); color: hsl(4, 100%, 67%); border: 1px solid hsl(4, 100%, 67%);"
    }else if(inputToArr.includes("@") && inputToArr.includes(".") && userInput.value.length > 0){
      errorMessage.style = "display: none;"
      userInput.style = ""
      let userWi = window.innerWidth
      let userHe = window.innerWidth
      document.getElementById("user-email-in").textContent = userInput.value
      document.querySelector("main").remove()
      document.querySelector(".success-box").style = `position:relative; left: 0;`
    }
})