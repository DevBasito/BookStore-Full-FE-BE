import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './AdminPage.css';
import images from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { setData, fetchBooks } from "../../../Redux/Books";
import Booklist from "../Booklist/Booklist";
import NewBookModal from "../Modal/NewBookModal";



const AdminPage = () => {
    const { user } = useSelector(state => state.user);
    console.log(user)
    const navigate = useNavigate();


    const logout = () => {
        navigate("/login")
    }

    useEffect(() => {
        const getLoggedInUser = async () => {

            // const user = {firstname, lastname, email}
            const response = await fetch('http://localhost:5000/signin', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': user.token
                },
                credentials: 'same-origin',

            })

            const data = await response.json();

            if (!response.ok) {

                console.log(data.message)

            }
            else if (response.ok) {
                console.log(data.message)
                


            }

        }
        getLoggedInUser()
    }, [])

    return (
        <div id="AdminPage">


            <div className="container-fluid row p-2 w-100  text-dark h3">
                <div className="col text-center"> Hello, {user.user.firstname} {user.user.lastname}</div>

            </div>



            <Booklist />



        </div>
    )

}

export default AdminPage;