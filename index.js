/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(timeString){
  var time = parseInt(timeString)
    if (time < 12)
      return "Good Morning"
    else if (time >= 12 && time <= 17) 
      return "Good Afternoon"
    else if (time > 17 && time <= 24)
      return "Good Evening";
}

function displayMessage(string){
  let greeting = document.getElementById('greeting')
    greeting.innerHTML = string
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
