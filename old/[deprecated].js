btnElement.addEventListener("click", (event) => {
  titleElement.textContent = `💥Ouch you poked my head: ${event.detail} times!`;
  console.log("button was clicked");
});
