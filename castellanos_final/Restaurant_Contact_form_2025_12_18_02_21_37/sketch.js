let nameInput, emailInput, messageInput;
let submitButton;
let confirmationText = "";

function setup() {
  createCanvas(400, 420); 
  textFont('Petit Formal Script'); 
  textSize(16);
  fill('#4b3f2f'); 
  noStroke();

  // Name input
  nameInput = createInput();
  nameInput.position(20, 60);
  nameInput.size(360);
  nameInput.attribute("placeholder", "Your Name");
  nameInput.style("font-family", "'Petit Formal Script', cursive");
  nameInput.style("padding", "8px");
  nameInput.style("border-radius", "5px");
  nameInput.style("border", "1px solid #ccc");

  // Email input
  emailInput = createInput();
  emailInput.position(20, 110);
  emailInput.size(360);
  emailInput.attribute("placeholder", "Your Email");
  emailInput.style("font-family", "'Petit Formal Script', cursive");
  emailInput.style("padding", "8px");
  emailInput.style("border-radius", "5px");
  emailInput.style("border", "1px solid #ccc");

  // Message input
  messageInput = createElement("textarea");
  messageInput.position(20, 160);
  messageInput.size(360, 100);
  messageInput.attribute("placeholder", "Your Message");
  messageInput.style("font-family", "'Petit Formal Script', cursive");
  messageInput.style("padding", "8px");
  messageInput.style("border-radius", "5px");
  messageInput.style("border", "1px solid #ccc");

  // Submit button
  submitButton = createButton("Submit");
  submitButton.position(20, 280);
  submitButton.style("background-color", "#ffd200"); 
  submitButton.style("color", "#4b3f2f");
  submitButton.style("padding", "10px 20px");
  submitButton.style("border", "none");
  submitButton.style("border-radius", "25px");
  submitButton.style("cursor", "pointer");
  submitButton.style("font-family", "'Petit Formal Script', cursive");
  submitButton.mousePressed(handleSubmit);
}

function draw() {
  background(255);
  text("Contact Form", 20, 40);
  text(confirmationText, 20, 320);
}

function handleSubmit() {
  let name = nameInput.value();
  let email = emailInput.value();
  let message = messageInput.value();

  if(name && email && message){
    confirmationText = "Thank you, " + name + "! Your message has been submitted.";
    nameInput.value("");
    emailInput.value("");
    messageInput.value("");
  } else {
    confirmationText = "Please fill out all fields.";
  }
}