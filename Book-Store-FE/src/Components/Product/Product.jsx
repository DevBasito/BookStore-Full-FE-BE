import React, { useState, useEffect } from "react";
import images from "../../assets/images";
import { useSelector, useDispatch } from "react-redux";
import { setCartNo } from "../../../Redux/cart";
import { useNavigate } from "react-router-dom";


const Product = (product) => {
    const { cartNo } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [productCount, setProductCount] = useState(0);
    const [productPrice, setProductPrice] = useState("");
    const [productTitle, setProductTitle] = useState("");

    const cartPlus = () => {
        setProductCount(productCount + 1)

    }

    const cartMinus = () => {
        if (productCount == 0) {
            setProductCount(0)
        } else {
            setProductCount(productCount - 1)
        }

    }

    const addToCart = () => {
        dispatch(setCartNo(productCount))
        setProductCount(0);
        

    }

    useEffect(() => {
        setProductPrice(product.product.price);
        setProductTitle(product.product.title);
    }, [product])


    return (
        <>
            <div className="modal fade" id="product" >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">

                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>



                        <div className="modal-body">
                            <div className="container row">
                                <div className="col-lg-6"> <img src={product.product.imageUrl} alt="" className="w-100 img-fluid h-100" /></div>


                                <div className="col-lg-6">
                                    <h6 className=" text-primary font-bold">{product.product.author}</h6>

                                    <h1 className="font-bold my-2">{product.product.title} </h1>
                                    <p className="opacity-75 ">{product.product.category}</p>

                                    <p className="my-3 opacity-75"> {product.product.description}</p>
                                    <p className="font-bold items-centern py-2">${product.product.price}</p>




                                    <div className="my-3">

                                        <span className="rounded-pill py-3" style={{ backgroundColor: "#F7F8FE" }}>
                                            <span className=" px-4 btn" onClick={cartMinus} ><img src={images.Minus} alt="" /></span>

                                            <span className="px-3 ">{productCount}</span>

                                            <span className=" px-4 btn" onClick={cartPlus} ><img src={images.Plus} alt="" /></span>

                                        </span>

                                    </div>
                                    <div>


                                        <button className="btn btn-primary py-3 px-4 text-white" data-bs-dismiss="modal" onClick={addToCart}>
                                            <img src={images.CartW} alt="" className="inline-block mx-1" />
                                            <span className="">Add to Cart</span>
                                        </button>

                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product