const form = document.querySelector('form')
form.addEventListener('submit',(event) => {
    event.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight  = parseInt(document.querySelector('#weight').value)
    let result = document.querySelector('#results')
    console.log(height)
    console.log(weight)

    if(height < 0 || height == " " || isNaN(height)){
        result.innerHTML = `it is not a valid height ${height}`
    }
    else if(weight < 0 || weight == " " || isNaN(weight)){
        result.innerHTML = `it is not a valid weight ${weight}`
    }
    else{
        let bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `Your BMI is ${bmi}`

        let status = document.querySelector('#hstat')
        if(18.60 > bmi){
            status.innerHTML = 'Your health status is : underweight'
        }
        if(18.60 < bmi && bmi < 24.90){
            status.innerHTML = 'Your health status is : Normal'
        }
        if(24.90 < bmi){
            status.innerHTML = 'Your health status is : overweight'
        }
    }

})