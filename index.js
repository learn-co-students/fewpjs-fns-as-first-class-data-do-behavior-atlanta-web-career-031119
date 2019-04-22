/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {

  const ptimeString = parseInt(timeString)
if (ptimeString < 12){

   return "Good Morning"}

    else if (ptimeString <= 17 && ptimeString >= 12)
   {
    return "Good Afternoon" } 
      else {

    return "Good Evening"}
}



/* Write your implementation of displayMessage() */
   function displayMessage(string){

    let greeting = document.getElementById('greeting')
    greeting.innerHTML = string
   }
