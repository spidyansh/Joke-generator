let joke = [`There’s a fine line between a numerator and a denominator. 
(…Only a fraction of people will get this clean joke.)`,
`What do dentists call their x-rays 
Tooth pics`,
`Did you hear about the first restaurant to open on the moon 
It had great food, but no atmosphere.`,
`What did one ocean say to the other ocean Nothing, 
it just waved`,
`Do you want to hear a construction joke Sorry, 
I’m still working on it.`]

let btn = document.querySelector(".btn")
let container = document.querySelector(".container")


btn.addEventListener("click", ()=>{
    let random = Math.floor(Math.random()*joke.length)
    container.innerHTML = joke[random]
    
})




