import Main from "./pages/Main";
import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import About from "./pages/About";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const apiEndPoint = "http://localhost:3000/posts";
  const inputname = useRef();


  
  const addPost = async () => {
    const newProd = {
      title: "salam",
      id: 888518,
    };
    await axios.post(apiEndPoint, newProd);
    setPosts(newProd, ...posts);
    console.log(posts);
  };



  useEffect(() => {
    const getPosts = async () => {
      const resp = await axios.get(apiEndPoint);
      setPosts(resp.data);
    };
    getPosts();
    console.log(posts);
  }, []);
  const accordionButton = document.querySelector(".add__product__acordion");

  const accordionHandler = () => {
    if (accordionButton.classList.contains("active")) {
      accordionButton.classList.remove("active");
    } else {
      accordionButton.classList.add("active");
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1 className="text-center" style={{ backgroundColor: "yellowgreen" }}>
          here are {posts.length} posts
        </h1>
        <span onClick={accordionHandler} className="x">
          add
        </span>

        <div className="add__product__acordion active add__prod">
          <div className="container add__prod__container">
            <div className="row add__prod__container__row">
              <div className="col-6 add__prod__container__row__inputs">
                <input
                  ref={inputname}
                  className="add__prod__inputs input__name"
                  type="text"
                  required
                  placeholder="type product name"
                />
                <input
                  className="add__prod__inputs input__desc"
                  type="text"
                  placeholder="type product desc"
                />
                <input
                  className="add__prod__inputs input__price"
                  type="text"
                  required
                  placeholder="type product price"
                />

                <div className="file">
                  <input
                    className="add__prod__inputs input__image"
                    type="file"
                    id="myFile"
                    name="filename"
                  />
                  <input className="add__prod__inputs" type="submit" />
                </div>
                {posts.length}
                <button onClick={addPost} className="add__to__server">
                  add to server
                </button>
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products productlist={posts} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
