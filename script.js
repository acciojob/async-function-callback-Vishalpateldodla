const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
// Define the async function that takes in a callback function as a parameter
async function fetchData(callback) {
try {
// Wait for the promise to resolve
const response = await fetch(url);
const data = await response.json();
// Call the callback function with the result
callback(data.title);
} catch (error) {
console.error(error);
}
}

// Define the callback function to display the result on the webpage
function displayData(title) {
const outputDiv = document.getElementById("output");
outputDiv.innerText = title;
}

// Add an event listener to the button to fetch the data and display it on the webpage
const fetchButton = document.getElementById("btn");
fetchButton.addEventListener("click", function () {
fetchData(displayData);
});