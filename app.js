window.addEventListener("scroll", () => {
  var scrollPos = window.scrollY;
  var element = document.getElementById("main");
  element.style.backgroundPositionY = +scrollPos + "px";
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 3400) {
    var scrollPos = window.scrollY - 900;
    var element = document.getElementById("counter");
    element.style.backgroundPositionY = +scrollPos - 3500 + "px";
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  await fetch("https://ieee-task-api.onrender.com")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

document.addEventListener("DOMContentLoaded", async () => {
  document
    .getElementById("message-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
      const data = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      let res;
      await fetch("https://ieee-task-api.onrender.com/users/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(async (response) => {
          if (response.ok) {
            res = await response.json();
            displayFlashMessage(res["msg"]);
          } else {
            res = await response.json();
            displayFlashMessageFail(res["msg"]);
          }
        })
        .catch(async (err) => {
          console.error(err);
        });
    });
});

function displayFlashMessage(message) {
  var flashContainer = document.getElementById("flashContainer");
  var flashMessage = document.createElement("div");
  flashMessage.classList.add("flash-message");
  flashMessage.textContent = message;
  flashContainer.appendChild(flashMessage);
  setTimeout(function () {
    flashContainer.removeChild(flashMessage);
  }, 3000);
}

function displayFlashMessageFail(message) {
  var flashContainer = document.getElementById("flashContainer");
  var flashMessage = document.createElement("div");
  flashMessage.classList.add("flash-message-fail");
  flashMessage.textContent = message;
  flashContainer.appendChild(flashMessage);
  setTimeout(function () {
    flashContainer.removeChild(flashMessage);
  }, 3000);
}

async function download() {
  window.location.href =
    "https://res.cloudinary.com/dl0ohmbko/raw/upload/fl_attachment/fczaecckeisi0pp7ysn1.rar";
}

async function learnMore() {
  window.location.href = "https://github.com/StylishCS/IEEE-TASK-API/tree/main";
}
