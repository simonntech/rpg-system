import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CharacterSheet from "./pages/CharacterSheet";
import Gallery from "./pages/Gallery";
import CharacterDetails from "./pages/CharacterDetails";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/character-sheet" element={<CharacterSheet />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </HashRouter>
  );
}
