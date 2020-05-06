
const bmiForm=document.getElementById("bmiForm")

function calculateBmi(){
  event.preventDefault()
  const weight=document.getElementById("weight").value
  const height=document.getElementById("height").value
  const result=document.getElementById("result")
  const error=document.getElementById("error")
  const info=document.getElementById("info")
  const bmi= weight/(Math.pow(height,2))

if(isNaN(weight) || isNaN(height)){
  error.innerHTML="Please enter a valid number"

}
if (weight==="" || height===""){
  error.innerHTML="Both values must be entered"

}
else{
  result.innerHTML="Your Body Mass Index is " + bmi
  error.style.display="none"
}

if (bmi < 1){
  info.innerHTML= "oooooo"
}
}

  bmiForm.addEventListener("submit", calculateBmi, false)
