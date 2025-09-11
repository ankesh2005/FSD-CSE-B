function wait2Secons(){
  const ms=new Date().getTime()+2000;
  while(new Date().getTime()<ms);

}

function register(){
  console.log("registering...");
  wait2Secons();
  console.log("registered");
}

function login(){
  console.log("login");
  wait2Secons();
  console.log("successful");
}

function getdata(){
  console.log("fetching...");
  wait2Secons();
  console.log("fetched");
}

register();
login();
getdata();