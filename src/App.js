import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./assets/js/ScrollTop";
import NavBar from "./components/NavBar";

import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import JourneyPage from "./pages/JourneyPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import StorePage from "./pages/StorePage";
import TeamPage from "./pages/TeamPage";
import { CartContextProvider } from "./store/cart-context";
import { StoreContextProvider } from "./store/store-context";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <ScrollToTop />
        <StoreContextProvider>
          <CartContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="journey" element={<JourneyPage />} />
              <Route path="team" element={<TeamPage />} />
              <Route path="store" element={<StorePage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="product-detail" element={<ProductDetailPage />} />
            </Routes>
          </CartContextProvider>
        </StoreContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
