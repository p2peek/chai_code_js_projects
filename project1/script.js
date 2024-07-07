const buttons = document.querySelectorAll(".h-btn")

buttons.forEach((element) =>{
    console.log(element)
    if(element.textContent === 'Red'){
        element.style.backgroundColor = element.textContent
        element.style.color = 'black'
    }
    if(element.textContent === 'Green'){
        element.style.backgroundColor = element.textContent
        element.style.color = 'black'
    }
    if(element.textContent === 'Blue'){
        element.style.backgroundColor = element.textContent
        element.style.color = 'black'
    }
    if(element.textContent === 'Yellow'){
        element.style.backgroundColor = element.textContent
        element.style.color = "black"
    }
})

const body = document.querySelector('body')
console.log(buttons)
let newBtn = Array.from(buttons)
console.log(newBtn)
newBtn.forEach((element) => {
    element.addEventListener('click' , (event)=> {
        console.log(event)
        let a = event.target.textContent
        console.log(a.textContent)
        if(a === 'Red'){
            body.style.backgroundColor = a
        }
        if(a === 'Green'){
            body.style.backgroundColor = a
        }
        if(a === 'Blue'){
            body.style.backgroundColor = a
        }
        if(a === 'Yellow'){
            body.style.backgroundColor = a
        }
    })
})
