import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Climatisation from "./pages/Services/Climatisation";
import Froid from "./pages/Services/Froid";
import Plomberie from "./pages/Services/Plomberie";
import Cuisines from "./pages/Services/Cuisines";
import Maintenance from "./pages/Services/Maintenance";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Services/Climatisation" element={<Climatisation />} />
          <Route path="/Services/Froid" element={<Froid />} />
          <Route path="/Services/Plomberie" element={<Plomberie />} />
          <Route path="/Services/Cuisines" element={<Cuisines />} />
          <Route path="/Services/Maintenance" element={<Maintenance />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
