/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  if (time < "12:00") {
    return "Good Morning";
  }
  else if (time > "12:00" && time < "17:00") {
    return "Good Afternoon";
  }
  return "Good Evening"
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let message = document.getElementById("greeting");
  message.textContent = string
}
