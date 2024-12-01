import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Gallery from "./components/galleryphotos/Gallery";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import Reservation from "./components/reservation/Reservation";

function App() {
  return (
    <>
      <div className="maincontent1 ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/gallery" element={<Gallery/>}></Route>
            <Route path="/menu" element={<Menu/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/reservation" element={<Reservation/>}></Route>


            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
