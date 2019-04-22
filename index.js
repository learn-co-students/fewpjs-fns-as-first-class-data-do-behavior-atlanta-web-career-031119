/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(str) {
  if (str.length == 4) {
    var hour = str.slice(0,1);
  } else {
    var hour = str.slice(0,2);
  };
  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  };
}

function displayMessage(str) {
  document.getElementById("greeting").textContent = str;
}
