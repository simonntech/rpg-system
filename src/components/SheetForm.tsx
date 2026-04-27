import { useState } from "react";
import { RACES } from "../data/races";
import { CHARACTER_CLASSES } from "../data/characterClasses";

export function SheetForm() {
  const [character, setCharacter] = useState({
    name: "",
    race: "",
    class: "",
    gender: "",
  });

  function getCharacterImage() {
    const { race, class: characterClass, gender } = character;
    if (!race || !characterClass || !gender) {
      return "/images/placeholder.png"; // Return a placeholder image if any attribute is missing
    }
    // Return the appropriate character image based on the selected attributes
    return `/images/${race}-${characterClass}-${gender}.jpg`;
  }

  function getCharacterName() {
    const {name} = character;
    if (!name) {
      return "Nome do Personagem";
    }
    return name;
  }

  function getRaceName() {
    const race = RACES.find((r) => r.id === character.race);
    return race ? race.name : "Raça do personagem";
  }

  function getClassName() {
    const charClass = CHARACTER_CLASSES.find((c) => c.id === character.class);
    return charClass ? charClass.name : "& Classe do personagem";
  }

  return (
    <form className="w-full max-w-lg bg-amber-100/70 shadow-md rounded px-8 pt-6 pb-8 mb-4 gap-2 flex flex-col">
      <input
        type="text"
        placeholder="Nome do Personagem"
        className="bg-amber-100/70 text-amber-950 placeholder:text-amber-950 border-2 rounded border-amber-950"
        onChange={(e) =>
          setCharacter({
            ...character,
            name: e.target.value,
          })
        }
      />

      <select
        name="race"
        id="race"
        className="bg-amber-100/70 text-amber-950 placeholder:text-amber-950 border-2 rounded border-amber-950"
        onChange={(e) =>
          setCharacter({
            ...character,
            race: e.target.value,
          })
        }
      >
        <option value="">Selecione a Raça</option>
        {RACES.map((race) => (
          <option key={race.id} value={race.id}>
            {race.name}
          </option>
        ))}
      </select>

      <select
        name="characterClass"
        id="characterClass"
        className="bg-amber-100/70 text-amber-950 placeholder:text-amber-950 border-2 rounded border-amber-950"
        onChange={(e) =>
          setCharacter({
            ...character,
            class: e.target.value,
          })
        }
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
        className="bg-amber-100/70 text-amber-950 placeholder:text-amber-950 border-2 rounded border-amber-950"
        onChange={(e) =>
          setCharacter({
            ...character,
            gender: e.target.value,
          })
        }
      >
        <option value="">
          Selecione o Gênero
        </option>
        <option value="male">Masculino</option>
        <option value="female">Feminino</option>
      </select>

      <div className="flex flex-col justify-between items-center">
        <h3 className="text-amber-950 font-bold font-serif text-2xl">Prévia do Personagem</h3>
          <img
            src={getCharacterImage()}
            alt="Personagem"
            className="w-3/4 h-1/2 object-cover border-2 border-amber-950 rounded-3xl mt-4"
          />
        <h3 className="text-amber-950 font-bold font-serif text-2xl">{getCharacterName()} - {getRaceName()} {getClassName()}</h3>
      </div>
    </form>
  );
}
