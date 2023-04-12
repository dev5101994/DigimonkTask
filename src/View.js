import React from 'react'
import { Icon } from 'react-icons-kit'
import { trash } from 'react-icons-kit/feather/trash'
import { BsSearch } from 'react-icons/bs';

///////////////////////////////////////////////
// const [books, setProducts] = useState(productList);
// const [searchVal, setSearchVal] = useState("");
// function handleSearchClick() {
//     if (searchVal === "") { setProducts(productList); return; }
//     const filterBySearch = productList.filter((item) => {
//         if (item.toLowerCase()
//             .includes(searchVal.toLowerCase())) { return item; }
//     })
//     setProducts(filterBySearch);
// }
// const mystyle = {
//     marginLeft: "600px",
//     marginTop: "20px",
//     fontWeight: "700"
// };



///////////////////////////////////////////////
function View({ books, deleteBook }) {

    // <BsSearch onClick={handleSearchClick} />
    return books.map(book => (

        <tr key={book.isbn}>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td className='delete-btn' onClick={() => deleteBook(book.isbn)}>
                <Icon icon={trash} />
            </td>
        </tr>

    ))
}

export default View