const form = document.querySelector(".form")
form.addEventListener("submit" , function(e){
    const num_guess = parseInt(document.querySelector("#number").value)
    const result = document.querySelector("#result")
    const random_num = Math.floor(Math.random() * (100 + 1))
    if( num_guess === "" || num_guess < 0 || isNaN(num_guess)){
        result.innerHTML = `Enter the valid value between 0 and 100`
    }else{

        if(num_guess === random_num && remain > 0){
            result.innerHTML = "You nailed it brother ,guessed it right"
        }else{
            result.innerHTML = "try again"
        }      
    }
})
