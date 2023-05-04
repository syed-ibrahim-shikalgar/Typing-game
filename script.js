// Get the elements from the HTML document
const quote = document.getElementById("quote");
const input = document.getElementById("input");
const startButton = document.getElementById("start");
const resultDiv = document.getElementById("result");

let startTime, endTime;

// Generate random text for the quote
const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "A journey of a thousand miles begins with a single step.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = randomQuote;

// Add an event listener to the start button
startButton.addEventListener("click", function () {
  // Hide the start button
  startButton.style.display = "none";

  // Set the focus on the input textarea
  input.focus();

  // Get the current time
  startTime = new Date().getTime();
});

// Add an event listener to the input textarea
input.addEventListener("input", function () {
  // Get the input value
  const inputValue = input.value.trim();

  // Check if the input value matches the quote text
  if (inputValue === randomQuote) {
    // Get the current time
    endTime = new Date().getTime();

    // Calculate the time taken to type
    const timeTaken = (endTime - startTime) / 1000;

    // Display the result
    resultDiv.innerText = `You took ${timeTaken.toFixed(2)} seconds to type.`;
  }
});
