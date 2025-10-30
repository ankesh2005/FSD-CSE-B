import React from 'react'

const Book = ({book}) => {
  const handleAdd=()=>{
    alert("Added to Cart");
  }
  return (
    <div className="card">
      <img src={book.image} alt={book.title} height={350} width={350} />
      <h3>Title: {book.title}</h3>
      <h4>Price:₹{book.price}</h4>
      <button onClick={handleAdd}>Add To Cart</button>
    </div>
  )
}

export default Book