function sum(a,b){
  return a+b;
}
async function fetchServerData(){
  const serverdata = await fetch('https://fakestoreapi.com/products');
  const jsonData = await serverdata.json();
  console.log(jsonData);
  return jsonData;
}

module.exports={sum,fetchServerData}
