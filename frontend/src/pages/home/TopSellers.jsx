import React, { useEffect, useState } from 'react'

const categorys = ["Choose a genre", "Business" , "Fiction","Horror", "Adventure"]

const TopSellers = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

    useEffect(() => {
        fetch("books.json")
        .then(res => res.json())
        .then((data) => setBooks(data))
    }, [])

    const filteredBooks = selectedCategory === "Choose a genre" ? books: books.filter(book => book.category === selectedCategory.toLowerCase())

    console.log(filteredBooks)

//dropdown
  return (
    <div className='py-10'>
        <h2 className='text-3 font-semibold md-6'>Top Sellers</h2>
        {/*category */}
        <div className='mb-8 flex items-center'>
          <select onChange={(e) => setSelectedCategory(e.target.value)}
          name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rouned-md px-4 py-2 focus:outline-none'>
            {
              categorys.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))
            }
          </select>
        </div>

        {
          filteredBooks.map((book, index) => (
            <div>{book.title}</div>
          ))
        }
    </div>
  )
}

export default TopSellers