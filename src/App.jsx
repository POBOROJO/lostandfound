import FoundItems from "./Components/Browse/FoundItems";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ReportFoundItem from "./Components/ReportFoundItem";
import ReportLostItem from "./Components/ReportLostItem";
import Storage from "./Components/Store/Storage";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./Components/Home";
import Contactus from "./Components/Contactus";

function App() {
  return (
    <Storage>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reportlostitem" element={<ReportLostItem />} />
        <Route path="/reportfounditem" element={<ReportFoundItem />} />
        <Route path="/browselostitem" />
        <Route path="/browsefounditem" element={<FoundItems />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </Storage>
  );
}

export default App;
