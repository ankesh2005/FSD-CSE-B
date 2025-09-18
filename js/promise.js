// const pr=new Promise((resolve,reject)=>{
//   // resolve("register");
//   reject("error");
// });
// pr.then(()=>{
//   console.log("resgister");
// }).then(()=>{
//   console.log("login");
//   reject("error");
// }).catch((err)=>{
//   console.log(err);
// })


function register() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
    console.log("user registered");
    resolve();
  }, 1000);
    
  })
}

function sendEmail() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
    console.log("Email sent");
    resolve();
  }, 1000);
  })
}

function login() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("User logged in");
      resolve();
    }, 1000);
  });
}

function getData() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("Data retrieved");
      resolve();
  }, 1000);
})
}

function displayData() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log("Data displayed🤣🤣");
      reject("fun try error💀");
    }, 1000);
  });
}

// register()
// .then(sendEmail)
// .then(login)
// .then(getData)
// .then(displayData)

async function f1(){
  try{
    await register();
    await sendEmail();
    await login();
    await getData();
    await displayData();
  }catch(err){
    console.log(err);
  }
}
f1();

