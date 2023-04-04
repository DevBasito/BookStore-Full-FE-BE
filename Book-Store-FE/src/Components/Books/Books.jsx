import React, { useEffect } from "react";
import './Books.css';
import Header from "../Header/Header";
import Subscribe from "../Subscribe/Subscribe";
import { useDispatch, useSelector } from "react-redux";
import { setData, fetchBooks, bookMinus, bookPlus } from "../../../Redux/Books";


const Books = () => {
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
        <>
            <Header />
            <div id="books" className="p-5">

                <div className="container row mx-auto">

                    {books && books.map((book) => (

                        <div className="card col-lg-3 mx-lg-5 my-3 p-3" key={book._id}>
                            <img className="card-img-top img-fluid" src={book.imageUrl} style={{ width: "100%" }} />
                            <div className="card-body">
                                <h4 className="card-title">{book.title}</h4>
                                <p className="card-text">{book.category}</p>
                                <a href="#" className="btn btn-primary">{book.description}</a>
                            </div>

                        </div>

                    ))}


                </div>

            </div>
            <Subscribe />
        </>
    )

}

export default Books;