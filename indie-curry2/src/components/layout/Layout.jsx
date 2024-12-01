import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Footer1 from "../footer1/Footer1";

export default function Layout({ children }) {
  return (
    <div className=" nav-color" >
      <Navbar />

      <div className="content">
        {children}
        </div>
      <Footer />
    </div>
  );
}
