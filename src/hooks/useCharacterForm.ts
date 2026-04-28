import { useState, useEffect } from "react";
import type Character from "../data/models/Character";
import { useNavigate } from "react-router-dom";

export function useCharacterForm() {
  const [character, setCharacter] = useState<Partial<Character>>(() => {
    const saved = localStorage.getItem("rpgCharacterDraft");
    return saved
      ? JSON.parse(saved)
      : { name: "", race: "", class: "", gender: "" };
  });

  useEffect(() => {
    localStorage.setItem("rpgCharacterDraft", JSON.stringify(character));
  }, [character]);

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setCharacter((prev): any => ({ ...prev, [name]: value }));
  };

  const saveCharacter = () => {
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

    if (character.id) {
      const updatedList = savedList.map((c: any) =>
        c.id === character.id ? character : c,
      );
      localStorage.setItem("rpgSavedCharacters", JSON.stringify(updatedList));
      alert("Personagem atualizado com sucesso!");
    } else {
      const newCharacter = {
        ...character,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      };
      const updatedList = [...savedList, newCharacter];
      localStorage.setItem("rpgSavedCharacters", JSON.stringify(updatedList));
      alert("Personagem salvo na Taverna!");
      navigate("/gallery")
    }

    setCharacter({ name: "", race: "", class: "", gender: "" } as any);
  };

  return { character, setCharacter, handleChange, saveCharacter };
}
