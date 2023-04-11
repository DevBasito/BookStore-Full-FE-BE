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
                            <div >
                                <img className="card-img-top img-fluid" src={book.imageUrl} style={{ width: "100%", height: "25rem" }} />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">{book.title}</h4>
                                <h6 className="card-text">{book.category}</h6>
                                <p className="text-left" style={{ height:"13rem" }}>{book.description}</p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary btn-lg px-5">$20</a>
                                </div>
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