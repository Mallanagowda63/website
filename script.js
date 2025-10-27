const btn = document.getElementById("changeTextBtn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  message.textContent = "🎉 You clicked the button! Welcome to my simple site!";
});