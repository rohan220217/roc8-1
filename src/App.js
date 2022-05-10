import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./assets/js/ScrollTop";
import NavBar from "./components/NavBar";

import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import JourneyPage from "./pages/JourneyPage";
import StorePage from "./pages/StorePage";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="journey" element={<JourneyPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="store" element={<StorePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
