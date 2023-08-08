const form = document.getElementById("chat-text-input-container");
const submitbtn = document.getElementById("submit-message");
const textArea = document.getElementById("chat-textinput");
const messagesContainer = document.getElementById("chat-messages");

messagesContainer.scrollTo(0, messagesContainer.scrollHeight);
function handleEnter(e) {
  const submit = new MouseEvent("click");
  if (e.key === "Enter") {
    e.preventDefault();
    submitbtn.dispatchEvent(submit);
  }
}

textArea.addEventListener("keypress", handleEnter);
