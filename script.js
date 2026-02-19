function welcomeUser() {
  alert("Welcome to IphTech!");
  document.body.style.backgroundColor = "#eef6ff";
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  if (name === "" || email === "") {
    message.style.color = "red";
    message.textContent = "Please fill all fields.";
  } else {
    message.style.color = "green";
    message.textContent = "Thank you! We'll contact you soon.";
    name.reset();
    email.reset();
  }
});

let count = 0;

function increase() {
  count++;
  document.getElementById("counter").textContent = count;
}

function decrease() {
  count--;
  document.getElementById("counter").textContent = count;
}
