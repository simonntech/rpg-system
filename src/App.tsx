import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CharacterSheet from "./pages/CharacterSheet";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/character-sheet"
          element={<CharacterSheet />}
        />

      </Routes>
    </BrowserRouter>
  );
}