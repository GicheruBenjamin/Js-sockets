// Connect to the WebSocket server
const socket = new WebSocket('ws://localhost:8080');

// DOM elements
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Function to display messages in the browser
function displayMessage(message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
}

// WebSocket event listeners
socket.addEventListener('open', () => {
    displayMessage('Connected to WebSocket server');
});

socket.addEventListener('message', (event) => {
    displayMessage(`Server: ${event.data}`);
});

socket.addEventListener('close', () => {
    displayMessage('Disconnected from server');
});

socket.addEventListener('error', (error) => {
    displayMessage(`WebSocket error: ${error.message}`);
});

// Send message to the server when the button is clicked
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        socket.send(message); // Send message to server
        displayMessage(`You: ${message}`); // Display message in browser
        messageInput.value = ''; // Clear input field
    }
});
