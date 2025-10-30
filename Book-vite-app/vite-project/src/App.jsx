import React from 'react'
import Book from './Components/Book'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {
   const books=[{
    image:'https://th.bing.com/th/id/OIP.aoev2rIsOSYLT6wmBC1eDgHaJV?w=208&h=262&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    title:'Physics',
    price:"480"
  },{
    image:'https://th.bing.com/th/id/OIP.aNm1aoymx1IjRc3_3nuGowHaL3?w=208&h=313&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    title:'maths',
    price:'500'
  },{
    image:'https://tse4.mm.bing.net/th/id/OIP.MixrJx6zngtdaQe74oC7wAHaJT?rs=1&pid=ImgDetMain&o=7&rm=3',
    title:'chemistry',
    price: '490'
  }]
  return (
    <>
    <Header/>
    <div className='BookList'>
      {books.map((book,index)=>(
         <Book book={book} key={index} />
      ))}
    </div>
    <Footer/>
    </>
  )
}

export default App