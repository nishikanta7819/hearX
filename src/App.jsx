import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Headphones from "./pages/headphones/Headphones";
import Earbuds from "./pages/earbuds/Earbuds";
import Speakers from "./pages/speakers/Speakers";
import Navbar from "./components/navbar/Navbar";
import Neckbands from "./pages/neckbands/Neckbands";
import Earphones from "./pages/earphones/Earphones";
import Footer from "./components/footer/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Shop />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/earbuds" element={<Earbuds />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/neckbands" element={<Neckbands />} />
          <Route path="/earphones" element={<Earphones />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
