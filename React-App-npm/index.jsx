import ReactDOM from 'react-dom/client'
import React from 'react';
import './style.css'
function Book({book}){
  return(
    <div className="card">
      <img src={book.image} height="200" width="200" alt="book image"></img>
      <h3>Title: {book.title}</h3>
      <h4>Price:₹{book.price}</h4>
      <button>Add to cart</button>
    </div>
  )
}

const books=[
  {image:"https://th.bing.com/th/id/OIP.a3JiRaDCCev5-0HMATz4QgHaIz?w=208&h=247&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",title:"price",price:785},
  {image:"https://tse2.mm.bing.net/th/id/OIP.aL-ocVAFap0cupCHwO7BEAHaKy?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",title:"Chemistry",price:785},
  {image:"https://meritbox.app/project/public/book/book_ACompleteCourseinMathematics9_1676377255.jpg",title:"Math",price:785}
]

function App(){
  return (
    <div>
      {
        books.map((b,i)=>{
          return <Book key={i} book={b} />
        })
      }
    </div>
  )
}

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(<App/>)