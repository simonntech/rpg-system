import { useState, useEffect } from "react";
import { RACES } from "../data/races";
import { CHARACTER_CLASSES } from "../data/characterClasses";
import { CharacterCard } from "./CharacterCard";
import Button from "./Button";

export function SheetForm() {
  const [character, setCharacter] = useState(() => {
    const savedCharacter = localStorage.getItem("rpgCharacterData");
    if (savedCharacter) {
      return JSON.parse(savedCharacter);
    }
    return {
      name: "",
      race: "",
      class: "",
      gender: "",
    };
  });

  useEffect(() => {
    localStorage.setItem("rpgCharacterData", JSON.stringify(character));
  }, [character]);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setCharacter((prevCharacter: any) => ({
      ...prevCharacter,
      [name]: value,
    }));
  };

  return (
    <form className="w-full max-w-lg md:max-w-3xl lg:max-w-5xl bg-amber-100/70 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 gap-3 flex flex-col">
      <input
        type="text"
        name="name"
        value={character.name}
        placeholder="Nome do Personagem"
        className="bg-amber-100/70 text-amber-950 placeholder:text-amber-950 border-2 rounded border-amber-950 p-1.5"
        maxLength={30}
        onChange={handleChange}
      />

      <select
        name="race"
        id="race"
        value={character.race}
        className="bg-amber-100/70 text-amber-950 placeholder:text-amber-950 border-2 rounded border-amber-950 p-1.5"
        onChange={handleChange}
      >
        <option value="">Selecione a Raça</option>
        {RACES.map((race) => (
          <option key={race.id} value={race.id}>
            {race.name}
          </option>
        ))}
      </select>

      <select
        name="class"
        id="characterClass"
        value={character.class}
        className="bg-amber-100/70 text-amber-950 placeholder:text-amber-950 border-2 rounded border-amber-950 p-1.5"
        onChange={handleChange}
      >
        <option value="">Selecione a Classe</option>
        {CHARACTER_CLASSES.map((charClass) => (
          <option key={charClass.id} value={charClass.id}>
            {charClass.name}
          </option>
        ))}
      </select>

      <select
        name="gender"
        id="gender"
        value={character.gender}
        className="bg-amber-100/70 text-amber-950 placeholder:text-amber-950 border-2 rounded border-amber-950 p-1.5"
        onChange={handleChange}
      >
        <option value="">Selecione o Gênero</option>
        <option value="male">Masculino</option>
        <option value="female">Feminino</option>
      </select>

      <CharacterCard character={character} />

      <div className="flex flex-col items-center">
        <Button
          text="Salvar Personagem"
          onclick={() => alert("Personagem salvo com sucesso!")}
        />
      </div>
    </form>
  );
}
