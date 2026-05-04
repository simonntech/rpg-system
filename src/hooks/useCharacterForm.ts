import { useState } from "react";
import type Character from "../data/models/Character";
import { useNavigate } from "react-router-dom";

export function useCharacterForm() {
  const [character, setCharacter] = useState<Partial<Character>>(() => {
    const saved = localStorage.getItem("rpgCharacterDraft");
    return saved
      ? JSON.parse(saved)
      : { name: "", race: "", class: "", gender: "" };
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    const updatedCharacter = { ...character, [name]: value };

    setCharacter(updatedCharacter);
    localStorage.setItem("rpgCharacterDraft", JSON.stringify(updatedCharacter));
  };

  const saveCharacter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !character.name ||
      !character.race ||
      !character.class ||
      !character.gender
    ) {
      alert("Preencha a ficha antes de salvar!");
      return;
    }

    const savedCharactersRaw = localStorage.getItem("rpgSavedCharacters");
    const savedList = savedCharactersRaw ? JSON.parse(savedCharactersRaw) : [];

    let updatedList;
    if (character.id) {
      updatedList = savedList.map((c: any) =>
        c.id === character.id ? character : c,
      );
      alert("Personagem atualizado com sucesso!");
    } else {
      const newCharacter = {
        ...character,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };
      updatedList = [...savedList, newCharacter];
      alert("Personagem salvo na Galeria!");
    }

    localStorage.setItem("rpgSavedCharacters", JSON.stringify(updatedList));

    localStorage.removeItem("rpgCharacterDraft");

    setCharacter({ name: "", race: "", class: "", gender: "" } as any);

    navigate("/gallery");
  };

  const handlePrint = () => {
    window.print(); 
  };

  return { character, setCharacter, handleChange, saveCharacter, handlePrint };
}
