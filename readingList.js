import { useState } from 'react'

const readingList = (props) => {
    const [books, setBooks] = useState(props.initialBooks || []);

    const renderBooks = () => {
        return books.map((book) => {
            return (
                <div key={book.id} style={{ textDecoration: book.read ? "line-through" : ""}}>
                    <p onClick={() => toggleBook(book.id)}>{book.title}</p>
                    <button onClick={() => deleteBook(book.id)}>Delete</button>
                </div>
            )
        })
    }
    const toggleBook = (idOfBookClicked) => {
        const updateBooks = books.map((upBooks) => {
            if(upBooks.id === idOfBookClicked){
                return {...upBooks, read: !upBooks.read}
            }
            return book
        })
        setBooks(updatesBooks)
    }

    const deleteBook = (id) => {
        let filterBooks = books.filter(book => {
            return book.id !== id
        })
        setBooks(filterBooks)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        console.log('title:', title)
        const newBooks = [...books, {id: Math.random(), title: title, read: false}]
        setBooks(newBooks)
        setBooks('')
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <form onSubmit={handleSubmit}>
                <p>title: </p>
                <input value={title} onChange={(e) => {SVGTextPositioningElement(e.target.value)} } />
                <button type='submit'>Add</button>
            </form>
            <div>{renderBooks}</div>
        </div>
    )
}

export default readingList;