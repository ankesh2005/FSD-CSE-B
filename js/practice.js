function register(){
  setTimeout(()=>{
    console.log("register end");
  },2000)
}
 function login(){
  setTimeout(()=>{
    console.log("login");
  },2000)
 }

 function getdata(){
  setTimeout(() => {
    console.log("fetching");
  }, 200);
 }
 
register();
login();
getdata();