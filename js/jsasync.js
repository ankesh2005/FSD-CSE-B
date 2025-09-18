function register(){
  wait2Secons();
  console.log('register end');
}
function sentemail(){
  setTimeout(() => {
    console.log('email send email');
  }, 1000);
}
function login(){
  wait2Secons();
  console.log('login end');
}
function getdata(){
  wait2Secons();
  console.log('get data');
}
function displayData(){
  console.log('display data');
}

register();
sentemail();
login();
getdata();
displayData();

function wait2Secons(){
  const ms=new Date().getTime()+2000;
  while(new Date().getTime()<ms);
} 
console.log("other function");