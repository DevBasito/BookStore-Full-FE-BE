import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setCartTotal, setCartProducts, setCartQtys } from "../../../Redux/cart";
import { useNavigate } from "react-router-dom";
import "./Checkout.css"


const Checkout = () => {

  const { cartTotal, cartProducts, cartQtys } = useSelector(state => state.cart); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit =() => {

  }

  return (
    <>
      <div id="form" className="container  mx-auto col-lg-6 p-5 bg-white rounded-3">
        <div className="h5 text-center">
          Kindly Fill in your Details
        </div>
        <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="fullname">FullName:</label>
          <input type="text" className="form-control" id="fullname" name="fullname" onChange={(e) =>
            setFullname(e.target.value)}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" name="email" onChange={(e) =>
            setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="phone">Phone Number</label>
          <input type="number" className="form-control" id="phone" name="phone" onChange={(e) =>
            setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="address">Delivery Address</label>
          <textarea className="form-control" rows="3" id="address" name="address" onChange={(e) =>
            setAddress(e.target.value)}>
          </textarea>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="email">Total Amount Payable</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={`$${cartTotal}`} readOnly={true} />
        </div>
        <div className="text-end mb-3 mt-5">
          <button type="submit" className="btn btn-outline-success">Proceed to make Payment</button>
        </div>
        </form>
      </div>
    </>
  )

}
export default Checkout;