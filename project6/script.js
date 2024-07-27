
function randomColor(){
    let hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i <  6; i++){
      let temp = hex[Math.floor(Math.random()*10)]
      color += temp 
    }
    console.log(color)
    return color
  }
  function changeBody(){
    let body = document.querySelector('body')
    body.style.backgroundColor = randomColor()
  }
  let start = document.querySelector('#start')
  start.addEventListener('click',() => {
    let temp = setInterval(changeBody,1000)
    let stop = document.querySelector('#stop')
    stop.addEventListener('click',() => {
      clearInterval(temp)
    })
  })