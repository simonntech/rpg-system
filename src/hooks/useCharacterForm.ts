import { useState } from "react";
import type Character from "../data/models/Character";
import { useNavigate } from "react-router-dom";

export function useCharacterForm() {
  const [character, setCharacter] = useState<Partial<Character>>(() => {
    // Busca o rascunho ou inicia vazio
    const saved = localStorage.getItem("rpgCharacterDraft");
    return saved ? JSON.parse(saved) : { name: "", race: "", class: "", gender: "" };
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedCharacter = { ...character, [name]: value };
    
    // Atualiza o estado E o localStorage no mesmo momento (Sincronização Manual)
    setCharacter(updatedCharacter);
    localStorage.setItem("rpgCharacterDraft", JSON.stringify(updatedCharacter));
  };

  const saveCharacter = () => {
    if (!character.name || !character.race || !character.class || !character.gender) {
      alert("Preencha a ficha antes de salvar!");
      return;
    }

    const savedCharactersRaw = localStorage.getItem("rpgSavedCharacters");
    const savedList = savedCharactersRaw ? JSON.parse(savedCharactersRaw) : [];

    // Lógica de Salvar/Atualizar
    let updatedList;
    if (character.id) {
      updatedList = savedList.map((c: any) => (c.id === character.id ? character : c));
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

    // --- A ORDEM AQUI É CRUCIAL ---
    // 1. Primeiro salvamos a lista oficial
    localStorage.setItem("rpgSavedCharacters", JSON.stringify(updatedList));
    
    // 2. LIMPAMOS O RASCUNHO (Obrigamos o navegador a esquecer)
    localStorage.removeItem("rpgCharacterDraft");
    
    // 3. Resetamos o estado local (opcional, já que vamos navegar)
    setCharacter({ name: "", race: "", class: "", gender: "" }as any);

    // 4. Navegamos para a galeria (Removi o navigate de dentro do else para garantir que rode sempre)
    navigate("/gallery");
  };

  return { character, setCharacter, handleChange, saveCharacter };
}