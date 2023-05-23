import React, { useEffect } from "react";
import images from "../../assets/images";


const Product = (product) => {
    return (
        <>
            <div className="modal fade" id="product" >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">



                        <div className="modal-body">
                            <div className="container row">
                                <div className="col"> <img src={product.product.imageUrl} alt="" className="w-100 "/></div>


                                <div className="col">
                                    <h6 className=" text-Orange font-bold  ">{product.product.author}</h6>


                                    <h1 className="font-bold text-3xl md:text-5xl my-4">{product.product.title} </h1>

                                    <p className="w-11/12 md:w-8/12 my-3 opacity-75"> {product.product.description}</p>
                                    <p className="font-bold text-3xl mt-4 my-5 items-center">
                                    ${product.product.price}
                                        <span className="px-1 mr-5 text-sm bg-PaleOrange  font-thin text-Orange rounded ">50%</span>
                                        <br className=" hidden md:block" />

                                        <del className="opacity-75 text-sm float-right md:float-left items-center">$ {product.product.category}</del>
                                    </p>



                                    <div className="my-4 hidden md:block">

                                        <span className="bg-Lightgrey rounded-lg  py-3 mr-3  ">
                                            <button className=" px-4 " ><img src={images.Minus} alt="" /></button>

                                            <span className="px-3 md:px-3 ">2</span>

                                            <button className=" px-4 " ><img src={images.Plus} alt="" /></button>

                                        </span>



                                        <button className="bg-Orange rounded-lg  py-3 px-5 text-white  " 
                                        // onClick={addToCart}
                                        >
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