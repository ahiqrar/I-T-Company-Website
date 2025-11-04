
/* let form = document.getElementById("contactForm");


if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    document.getElementById("response").innerText =
     `Thank you, ${name}! We have received your message: "${message}". We will reply to ${email}.`;
    form.reset();
  });
} */


  let form = document.getElementById("contactForm")
  

    form.addEventListener("submit" , function (event)

  {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    document.getElementById("response").innerText= 
     `Thank you, ${name}! We have received your message: "${message}". We will reply to ${email}.`;
      form.reset();
  });
  

