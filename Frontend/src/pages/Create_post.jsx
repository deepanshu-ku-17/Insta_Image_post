import React from "react";
import "/src/App.css";
import axios from "axios";
const Create_post = () => {

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    axios.post("http://localhost:3000/create-post", formData)
    .then((res)=>{
      alert("post created successfully")
      e.target.reset()
    })
    .catch((err)=>{
      console.log(err)
      alert("error creating post")
    })
  }

  return (
    <>
      <div className="MainDiv">
        <div className="HeadingDiv">
          welcome to the Sasta Instagram, Here you can post your Image and add
          some Caption with it.
        </div>
        <div className="SubHeading">
          Fill the form and Become a Stud and farm your Aura
        </div>
        <div className="FormDiv">
          <form className="Form" onSubmit={handleSubmit}>
            <input
              type="file"
              className="FileInput"
              name="image"
              accept="image/*"
            />
            <input
              type="text"
              className="TextInput"
              placeholder="Caption"
              name="caption"
              required
            />
            <button type="submit" className="SubmitBtn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create_post;
