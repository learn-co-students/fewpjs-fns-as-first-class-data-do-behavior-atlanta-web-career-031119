/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(hr) {
  if (hr[0]+hr[1] < 12) {
    return 'Morning'
  }
  else if (hr[0]+hr[1] > 16) {
    return 'Evening'
  }
  else {
    return 'Afternoon'
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(response) {
  console.log(`Good ${response}`)
  return `Good ${response}`
}
