import { useState, useEffect } from "react";
import { CharacterCard } from "../components/CharacterCard";

export default function Gallery() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("rpgSavedCharacters");
    if (saved) {
      setCharacters(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-serif font-bold text-amber-50">
          Galeria de Personagens
        </h1>
        <a href="/" className="text-amber-100 hover:underline">
          Início
        </a>
      </div>

      {characters.length === 0 ? (
        <p className="text-gray-400 text-center">
          Nenhum herói encontrado nesta galeria ainda...
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {characters.map((char: any) => (
            <CharacterCard
              key={char.id}
              character={char}
              variant="mini" 
            />
          ))}
        </div>
      )}
    </div>
  );
}
