import { useState, useEffect } from "react";
import type Character from "../data/models/Character"; 

export function useCharacterForm() {
  const [character, setCharacter] = useState<Partial<Character>>(() => {
    const saved = localStorage.getItem("rpgCharacterDraft");
    return saved ? JSON.parse(saved) : { name: "", race: "", class: "", gender: "" };
  });

  useEffect(() => {
    localStorage.setItem("rpgCharacterDraft", JSON.stringify(character));
  }, [character]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({ ...prev, [name]: value }));
  };

  return { character, setCharacter, handleChange };
}