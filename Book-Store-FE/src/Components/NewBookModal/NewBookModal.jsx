import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const NewBookModal = () => {

  const { user } = useSelector(state => state.user);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newbook = { title, category, author, imageUrl, description };
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

      console.log(data.message)
      setMessage(data.message)

    }
    else if (response.ok) {
      setMessage(data.message)
      setTitle("");
      setCategory('');
      setAuthor('');
      setImageUrl('');
      setDescription('');
      // console.log('user signed in', data);
      // dispatch(setData(data));
      // navigate('/admin')




    }


  }


  return (
    <>
      <div className="modal fade" id="myNewBookModal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">


            <div className="modal-body ">
              {message &&
                <div className="w-50 float-right bg-danger">
                  {message}
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

                <button type="submit" className="btn btn-primary btn-lg">Submit</button>

              </form>


            </div>


            <div className="modal-footer">
              <button className="btn btn-danger" data-bs-dismiss="modal" onClick={() => { navigate("/admin") }}>Close</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default NewBookModal;