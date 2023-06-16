import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, subCartNo, setCartTotal } from "../../../Redux/cart";
import { useNavigate } from "react-router-dom";


const Cart = () => {

  const { cartItems } = useSelector(state => state.cart);
  const { cartTotal } = useSelector(state => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const newbook = { title, category, author, imageUrl, description, price };
    const response = await fetch('http://localhost:5000/books/create', {
      method: 'POST',
      body: JSON.stringify(newbook),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': user.token
      }
    })

    const data = await response.json();

    if (!response.ok) {

      setError(data.message)

    }
    else if (response.ok) {
      setMessage(data.message)
      clearState();
    }

  }

  useEffect(() => {
    let totalAmount
    cartItems.forEach(cartItem => {
      totalAmount += cartItem.subtotal;
    })

    dispatch(setCartTotal(totalAmount))

  }, [cartItems])


  return (
    <>
      <div className="modal fade" id="cart">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <p className="text-center h5">CART</p>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body ">

              <div className="container-fluid mx-auto table-responsive" id="tablediv">
                <table className="table table-hover table-responsive ">
                  <thead className="table-dark text-white">
                    <tr>
                      {/* <th>ID</th> */}
                      <th>Title</th>
                      <th>Price ($)</th>
                      <th>Quantity</th>
                      <th>SubTotal ($)</th>
                      <th>&nbsp.</th>

                    </tr>
                  </thead>
                  <tbody>

                    {cartItems && cartItems.map((cartItem) => (

                      <tr className="" key={cartItem.id}>
                        <td>{cartItem.title}</td>
                        <td>{cartItem.price}</td>
                        <td>{cartItem.quantity}</td>
                        <td>{cartItem.subtotal}</td>
                        <td>
                          <i className="fa fa-close"
                            onClick={() => {
                              dispatch(removeItem(cartItem.id))
                              dispatch(subCartNo(cartItem.quantity))
                            }}>
                          </i>
                        </td>
                      </tr>

                    ))}
                  </tbody>
                </table>

              </div>


              <h1>Total : {cartTotal}</h1>



            </div>


            <div className="modal-footer">
              <button className="btn btn-danger" data-bs-dismiss="modal" onClick={close}>Close</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default Cart;