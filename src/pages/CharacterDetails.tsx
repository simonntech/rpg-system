import { useParams, Link } from "react-router-dom";
import { CharacterCard } from "../components/CharacterCard";
import { useEffect, useState } from "react";

export default function CharacterDetails() {
  const { id } = useParams(); 
  const [character, setCharacter] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("rpgSavedCharacters");
    if (saved) {
      const list = JSON.parse(saved);
      const found = list.find((char: any) => char.id === id);
      setCharacter(found);
    }
  }, [id]);

  if (!character) {
    return (
      <div className="min-h-screen bg-gray-900/80 flex items-center justify-center text-amber-50">
        Personagem não encontrado...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900/80 p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl mb-6">
        <Link to="/gallery" className="text-amber-100 hover:underline">
          ← Voltar
        </Link>
      </div>
      
      <CharacterCard character={character} variant="full" />
    </div>
  );
}