import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CharacterCard } from "../components/CharacterCard";
import SecondaryButton from "../components/SecondaryButton";

export default function Gallery() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("rpgSavedCharacters");
    if (saved) {
      setCharacters(JSON.parse(saved));
    }
  }, []);

  const handleDeleteCharacter = (idToDelete: string, characterName: string) => {
    const confirmDelete = window.confirm(
      `Tem certeza que deseja excluir ${characterName}? Esta ação não pode ser desfeita!`,
    );

    if (confirmDelete) {
      const updatedList = characters.filter(
        (char: any) => char.id !== idToDelete,
      );
      setCharacters(updatedList);
      localStorage.setItem("rpgSavedCharacters", JSON.stringify(updatedList));
      setCharacters(updatedList);
      localStorage.removeItem("rpgCharacterDeaft");
    }
  };

  const handleEditCharacter = (charToEdit: any) => {
    localStorage.setItem("rpgCharacterDraft", JSON.stringify(charToEdit));
    navigate("/gallery");
  };

  function goToCreateCharacter() {
    navigate("/character-sheet");
  }

  return (
    <div className="min-h-screen bg-gray-950 p-8">
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
          <SecondaryButton text="Criar" onclick={goToCreateCharacter} />
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
          {characters.map((char: any) => (
            <CharacterCard
              key={char.id}
              character={char}
              variant="mini"
              onDelete={() => handleDeleteCharacter(char.id, char.name)}
              onEdit={() => handleEditCharacter(char)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
