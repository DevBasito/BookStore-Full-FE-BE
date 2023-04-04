import React, { useEffect } from "react";
import './Booklist.css';
import { useDispatch, useSelector } from "react-redux";
import { setData, fetchBooks } from "../../../Redux/Books";


const Booklist = () => {
    const { books } = useSelector(state => state.books);
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchedbooks = async () => {
            const response = await fetch('http://localhost:5000/books/all');
            const data = await response.json();
            console.log(data);
            dispatch(setData(data));


        }
        fetchedbooks()
    }, [])


    return (
        <div id="books" className="p-5">

            <div className="container  mx-auto table-responsive">
                <table className="table table-bordered table-striped table-hover table-responsive ">
                    <thead className="table-dark text-white">
                        <tr className="" >
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Image Thumbnail</th>

                        </tr>
                    </thead>
                    <tbody>

                        {books && books.map((book) => (

                            <tr className="" key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.description}</td>
                                <td>{book.category}</td>
                                <td>{book.author}</td>
                                <td>{book.imageUrl}</td>

                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Booklist;