import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Home/Blogs/Blogs";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="blogs" element={<Blogs />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
