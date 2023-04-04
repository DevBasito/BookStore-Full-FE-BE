import React from "react";
import './Home.css';
import Header from "../Header/Header";
import images from "../../assets/images";
import Subscribe from "../Subscribe/Subscribe";



const Home = () => {


    return (
        <>
            <Header />
            <div id="home" >



                <div className=" mx-auto p-5 container w-lg-75 d-flex flex-column-reverse flex-lg-row  ">

                    <div className="w-100 w-lg-50 my-auto" >

                        <h6 className="small text-primary py-2">NEW RELEASE</h6>
                        <h1 className="py-2">The Sons of the Empire</h1>
                        <h6 className="py-2">Convallis feugiat enim consectetur mi purus massa sit mus in ac lacus odio ut scelerisque parturient.</h6>
                        <p className="py-2">Vitae quam interdum turpis faucibus non in quis volutpat eu, amet enim sed mattis augue sed ultrices
                            vestibulum vitae praesent vitae id massa a rhoncus id donec odio.
                        </p>

                    </div>
                    <div className="w-100 w-lg-50 text-center" >

                        <img src={images.JR} alt="JR" className="img-fluid" />

                    </div>

                </div>

                <Subscribe />

            </div>
        </>
    )

}

export default Home;