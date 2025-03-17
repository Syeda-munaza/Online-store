import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import DetailProduct from "./pages/DetailProduct";
import AllCategories from "./pages/AllCategories";
import CategoryProduct from "./pages/CategoryProduct";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route path="/all-categoires" element={<AllCategories />} />
        <Route path="/category/:name" element={<CategoryProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
