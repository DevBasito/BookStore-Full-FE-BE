import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBookById } from "../../../Redux/Books";
import { useNavigate } from "react-router-dom";


const UpdateBookModal = ({ bookid }) => {

  const { user } = useSelector(state => state.user);
  const { bookById } = useSelector(state => state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState(bookid);
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available_yn, setAvailable_yn] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {

    const fetchbook = async () => {
      const response = await fetch(`http://localhost:5000/books/${bookid}`, {
        method: 'GET',
        credentials: 'same-origin',

      });
      const data = await response.json();
      dispatch(setBookById(data));
      setTitle(bookById[0].title);
      setCategory(bookById[0].category);
      setAuthor(bookById[0].author);
      setImageUrl(bookById[0].imageUrl)
      setDescription(bookById[0].description)
      setPrice(bookById[0].price)
      setAvailable_yn(bookById[0].available_yn)
    }
    fetchbook();
  }, [bookById])


  const cancelSuccessMsg = () => {
    setMessage(null);
    setError(null);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateBook = {id, title, category, author, imageUrl, description, price, available_yn };
    const response = await fetch('http://localhost:5000/books/update', {
      method: 'PUT',
      body: JSON.stringify(updateBook),
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
 


  return (
    <>
      <div className="modal fade" id="updateBookModal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="text-center  p-3 h4">EDIT BOOK</div>


            <div className="modal-body ">
              {message &&
                <div className="w-50 text-white p-3 float-end bg-success mb-3">
                  <i className="fa fa-close btn text-white" onClick={cancelSuccessMsg}></i>
                  {message}
                </div>
              }

              {error &&
                <div className="w-50 text-white p-3 float-end bg-danger mb-3">
                  <i className="fa fa-close btn text-white" onClick={cancelSuccessMsg}></i>
                  {error}
                </div>
              }



              <form onSubmit={handleSubmit}>

                <div className="my-3  ">
                  <input type="text" className="form-control" id="title" placeholder="Book Title" name="title" onChange={(e) =>
                    setTitle(e.target.value)} value={title} required />
                </div>
                <div className="my-3 ">
                  <input type="text" className="form-control" id="category" placeholder="Book Genre" name="category" onChange={(e) =>
                    setCategory(e.target.value)} value={category} required />
                </div>
                <div className="my-3 ">
                  <input type="text" className="form-control" id="author" placeholder="Book Author" name="author" onChange={(e) =>
                    setAuthor(e.target.value)} value={author} required />
                </div>
                <div className="my-3">
                  <input type="text" className="form-control" id="imageUrl" placeholder="Image URL" name="imageUrl" onChange={(e) =>
                    setImageUrl(e.target.value)} value={imageUrl} required />
                </div>
                <div className="my-3 ">
                  <input type="text" className="form-control" id="description" placeholder="Book Description" name="description" onChange={(e) =>
                    setDescription(e.target.value)} value={description} required />
                </div>
                <div className="my-3 ">
                  <input type="number" className="form-control" id="price" placeholder="Price in Dollars ($)" name="price" onChange={(e) =>
                    setPrice(e.target.value)} value={price} required />
                </div>
                <div className="form-check form-switch">
                  <label className="form-check-label" for="available_yn">Available</label>
                  <input className="form-check-input form-control" type="checkbox" id="available_yn" name="available_yn" onChange={(e) =>
                    setAvailable_yn(e.target.checked)} value={available_yn} />
                </div>

                <button type="submit" className="btn btn-primary btn-lg">Update</button>

              </form>


            </div>


            <div className="modal-footer">
              <button className="btn btn-danger" data-bs-dismiss="modal" >Close</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default UpdateBookModal;