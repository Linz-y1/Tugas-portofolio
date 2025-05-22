// const form = document.getElementById('contact-form');
// const nameInput = form.name;
// const emailInput = form.email;
// const messageInput = form.message;

// const successMsg = document.getElementById('success-message');
// const nameError = document.getElementById('name-error');
// const emailError = document.getElementById('email-error');
// const messageError = document.getElementById('message-error');

// function validateEmail(email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // Kosongkan pesan error sebelumnya
//     nameError.textContent = '';
//     emailError.textContent = '';
//     messageError.textContent = '';
//     successMsg.textContent = '';

//     let valid = true;

//     if (nameInput.value.trim() === '') {
//         nameError.textContent = 'Please enter your name.';
//         valid = false;
//     }

//     if (!validateEmail(emailInput.value.trim())) {
//         emailError.textContent = 'Please enter a valid email address.';
//         valid = false;
//     }

//     if (messageInput.value.trim() === '') {
//         messageError.textContent = 'Please enter your message.';
//         valid = false;
//     }

//     if (valid) {
//         successMsg.textContent = 'Thank you! Your message has been sent';
//         form.reset();
//     }
// });

  function clock() {
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    var ampm = document.getElementById('ampm');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var am = "AM";

    if (h > 12) {
      h = h - 12;
      am = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
  }

  var interval = setInterval(clock, 1000);

function date() {
  var dateElement = document.getElementById('date');
var now = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", 
              "August", "September", "October", "November", "December"];

var dayName = days[now.getDay()];
var day = now.getDate();
var month = months[now.getMonth()];
var year = now.getFullYear();

dateElement.innerHTML = `${dayName}, ${day} ${month} ${year}`;
}


