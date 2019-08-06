/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let timeSplit = timeString.split(':')
  let hourInt = parseInt(timeSplit[0], 10)
  let minInt = parseInt(timeSplit[1], 10)
  debugger;
  if (hourInt < 12)
  { return `Good Morning` }
  else if (hourInt >= 12 && hourInt < 17)
  { return `Good Afternoon` }
  else if (hourInt >= 17)
  { return `Good Evening` }
}

/* Write your implementation of displayMessage() */
function displayMessage(strMessage) {
  const h1GreetNode = document.getElementById(`greeting`);
  h1GreetNode.textContent = strMessage;
}
