import React, { useEffect, useState } from "react";
import './Booklist.css';
import { useDispatch, useSelector } from "react-redux";
import { setData, fetchBooks } from "../../../Redux/Books";
import NewBookModal from "../Modal/NewBookModal";
import UpdateBookModal from "../Modal/UpdateBookModal";




const Booklist = () => {
    const { user } = useSelector(state => state.user);
    const { books } = useSelector(state => state.books);
    const dispatch = useDispatch();
    const [bookId, setBookId] = useState(null)


    

    useEffect(() => {

        const fetchedbooks = async () => {
            const response = await fetch('http://localhost:5000/books/allbooks', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': user.token
                },
                credentials: 'same-origin',

            });
            const data = await response.json();
            dispatch(setData(data));
         


        }
        fetchedbooks()
    }, [books])
    console.log(books)

    return (
        <>
        <div id="books" className="">
            <div className="container-fluid d-flex flex-direction-row justify-content-between w-100 mb-2 px-5">
                <div className="h3">List of Books</div>
                <div>
                    <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#myNewBookModal">
                        New Book <i className="fa fa-plus"></i>
                    </button>
                </div>

            </div>

            <div className="container-fluid mx-auto table-responsive" id="tablediv">
                <table className="table table-bordered table-striped table-hover table-responsive ">
                    <thead className="table-dark text-white">
                        <tr className="" >
                            <th> </th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Image Thumbnail</th>
                            <th>Price ($)</th>
                            <th>Sales Count</th>
                            <th>Available</th>

                        </tr>
                    </thead>
                    <tbody>

                        {books && books.map((book) => (

                            <tr className="" key={book._id}>
                                <td>
                                
                                    <i className="fa fa-edit btn" data-bs-toggle="modal" data-bs-target="#updateBookModal" onClick={()=>{setBookId(book._id)}}></i>
                                  

                                </td>
                                <td>{book.title}</td>
                                <td>{book.description}</td>
                                <td>{book.category}</td>
                                <td>{book.author}</td>
                                <td>{book.imageUrl}</td>
                                <td>{book.price}</td>
                                <td>{book.available_yn}</td>

                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>


        <NewBookModal/>
        <UpdateBookModal bookid= {bookId}  />

        </>
    )

}

export default Booklist;