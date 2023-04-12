import React, { useState, useEffect } from 'react'
import View from './View'
import { BsSearch } from 'react-icons/bs';
// getting the values of local storage
const getDatafromLS = () => {
    const data = localStorage.getItem('books');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}

function Home() {
    const [books, setbooks] = useState(getDatafromLS());

    // input field states
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');

    // form submit event
    const handleAddBookSubmit = (e) => {
        e.preventDefault();
        // creating an object
        let book = {
            title,
            author,
            isbn
        }
        setbooks([...books, book]);
        setTitle('');
        setAuthor('');
        setIsbn('');
    }

    // delete book from LS
    const deleteBook = (isbn) => {
        const filteredBooks = books.filter((element, index) => {
            return element.isbn !== isbn
        })
        setbooks(filteredBooks);
    }

    // saving data to local storage
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])


    return (
        <div className='wrapper'>
            <h1>ProductList App</h1>
            <p>Add and view your books using local storage</p>
            <div className='main'>

                <div className='form-container'>
                    <form autoComplete="off" className='form-group'
                        onSubmit={handleAddBookSubmit}>
                        <label>Product</label>
                        <input type="text" className='form-control' required
                            onChange={(e) => setTitle(e.target.value)} value={title}></input>
                        <br></br>
                        <label>Cost</label>
                        <input type="text" className='form-control' required
                            onChange={(e) => setAuthor(e.target.value)} value={author}></input>
                        <br></br>
                        <label>Brand</label>
                        <input type="text" className='form-control' required
                            onChange={(e) => setIsbn(e.target.value)} value={isbn}></input>
                        <br></br>
                        <button type="submit" className='btn btn-success btn-md'>
                            ADD
                        </button>
                    </form>
                </div>

                <div className='view-container'>
                    {books.length > 0 && <>
                        <div className='table-responsive'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Brand</th>
                                        <th>Product</th>
                                        <th>Cost</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <View books={books} deleteBook={deleteBook} />
                                </tbody>
                            </table>
                        </div>
                        <button className='btn btn-danger btn-md'
                            onClick={() => setbooks([])}>Remove All</button>
                    </>}
                    {books.length < 1 && <div>No books are added yet</div>}
                </div>

            </div>
        </div>
    )
}

export default Home