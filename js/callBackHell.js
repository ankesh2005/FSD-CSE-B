
// 💥 Callback Hell Example in JavaScript

function register(cb) {
  setTimeout(() => {
    console.log("User registered");
    cb();
  }, 1000);
}

function sendEmail(cb) {
  setTimeout(() => {
    console.log("Email sent");
    cb();
  }, 1000);
}

function login(cb) {
  setTimeout(() => {
    console.log("User logged in");
    cb();
  }, 1000);
}

function getData(cb) {
  setTimeout(() => {
    console.log("Data retrieved");
    cb();
  }, 1000);
}

function displayData() {
  setTimeout(() => {
    console.log("Data displayed🤣🤣");
  }, 1000);
}

// ⚠️ Callback Hell in action
register(() => {
  sendEmail(() => {
    login(() => {
      getData(() => {
        displayData();
      });
    });
  });
});