// Chatbot functionality for Dr. Aarogya
document.addEventListener("DOMContentLoaded", () => {
  const chatOutput = document.getElementById("chat-output");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");

  // Example responses for chatbot
  const responses = {
    greeting: "Namaste! I am Dr. Aarogya. How can I assist you today?",
    symptoms: "Can you describe your symptoms in detail?",
    fever: "It seems like you might have a fever. I recommend taking Paracetamol and drinking lots of fluids. If symptoms persist, please see a doctor.",
    headache: "For a headache, rest in a quiet room and take over-the-counter pain relief like Ibuprofen. Stay hydrated!",
    tests: "Based on your symptoms, I suggest a Blood Test and CBC test. Would you like more information about these?",
    thankYou: "You're welcome! Take care and stay healthy.",
    default: "I am sorry, I didn't understand that. Can you please elaborate?",
  };

  // Function to add a message to the chat
  function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
    chatOutput.appendChild(messageDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight;
  }

  // Function to handle chatbot response
  function getBotResponse(message) {
    message = message.toLowerCase();
    if (message.includes("hello") || message.includes("hi")) {
      return responses.greeting;
    } else if (message.includes("symptom")) {
      return responses.symptoms;
    } else if (message.includes("fever")) {
      return responses.fever;
    } else if (message.includes("headache")) {
      return responses.headache;
    } else if (message.includes("test")) {
      return responses.tests;
    } else if (message.includes("thank")) {
      return responses.thankYou;
    }
    return responses.default;
  }

  // Event listener for sending messages
  sendButton.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      addMessage(userMessage, "user");
      const botResponse = getBotResponse(userMessage);
      setTimeout(() => {
        addMessage(botResponse, "bot");
      }, 500);
      userInput.value = "";
    }
  });

  // Allow pressing Enter to send a message
  userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      sendButton.click();
    }
  });
});
