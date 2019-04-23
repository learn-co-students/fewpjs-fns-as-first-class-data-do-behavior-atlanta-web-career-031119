/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time){
  if (time < "12:00")
    {return "Good Morning"}
  else if (time < "17:00")
    {return "Good Afternoon"}
  else 
    {return "Good Evening"}
}

function displayMessage(message){
  document.getElementById("greeting").innerHTML = message
}