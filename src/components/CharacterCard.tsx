import { useState } from "react";
import { RACES } from "../data/races";
import { CHARACTER_CLASSES } from "../data/characterClasses";

export function CharacterCard({ character }: { character: any }) {
  const [showMobileDetails, setShowMobileDetails] = useState(false);

  const { name, race, class: characterClass, gender } = character;

  const raceObj = RACES.find((r) => r.id === race);
  const classObj = CHARACTER_CLASSES.find((c) => c.id === characterClass);

  function getCharacterImage() {
    if (!race || !characterClass || !gender) return "/images/placeholder.png";
    return `/images/${race}-${characterClass}-${gender}.jpg`;
  }

  function getCharacterName() {
    return name || "";
  }

  if (!raceObj || !classObj) {
    return (
      <div className="flex flex-col items-center mt-6">
        <p className="text-amber-950 font-bold mb-4">
          Preencha os dados para ver o card completo.
        </p>
        <div className="relative w-75 h-112.5 bg-amber-100 rounded-3xl overflow-hidden border-4 border-black shadow-2xl opacity-50">
          <img
            src={getCharacterImage()}
            alt="Placeholder"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 max-w-4xl w-full mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-700 transition-all duration-300">
      <div
        className="relative md:w-3/7 cursor-pointer md:cursor-default group"
        onClick={() => setShowMobileDetails(!showMobileDetails)}
      >
        <div className="relative w-full aspect-3/4 md:h-full bg-amber-100 overflow-hidden">
          <img
            src={getCharacterImage()}
            alt="Personagem"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img
            src="/images/frame.png"
            alt="Moldura"
            className="absolute inset-0 w-full h-full z-10 pointer-events-none object-fill"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black via-black/80 to-transparent"></div>

          <div className="absolute bottom-5 left-0 right-0 px-6 pb-2 text-center z-10">
            <h3 className="text-amber-100 font-serif font-black text-4xl tracking-tight leading-tight [text-shadow:2px_2px_0_rgb(67_20_7/80%)] mb-6">
              {getCharacterName()}
            </h3>
            <p className="text-black font-sans text-lg font-semibold uppercase">
              {raceObj.name} {classObj.name}
            </p>
          </div>

          <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded-full md:hidden animate-pulse z-20 border border-gray-500">
            {showMobileDetails ? "▲ Ocultar" : "▼ Detalhes"}
          </div>
        </div>
      </div>

      <div
        className={`md:w-2/3 border-2 bg-[url(../../public/images/bg-card.jpg)] border-[#B78652] p-6 md:p-8 flex-col gap-6 md:flex ${showMobileDetails ? "flex" : "hidden"}`}
      >
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-amber-100 font-bold text-2xl">
              {classObj.title || classObj.name}
            </span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed text-justify">
            {classObj.description}
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-amber-100 font-bold text-2xl">
              {raceObj.name}
            </span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed text-justify whitespace-pre-line">
            {raceObj.description}
          </p>
        </div>

        <div className="mt-auto">
          <h4 className="font-bold text-amber-100 uppercase mb-3 text-xl">
            Bônus de Classe
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
            <StatBox
              label="FOR"
              value={classObj.strengthBonus}
              colorClass="text-red-400"
            />
            <StatBox
              label="DES"
              value={classObj.dexterityBonus}
              colorClass="text-green-400"
            />
            <StatBox
              label="INT"
              value={classObj.intelligenceBonus}
              colorClass="text-blue-400"
            />
            <StatBox
              label="AGI"
              value={classObj.agilityBonus}
              colorClass="text-yellow-400"
            />
            <StatBox
              label="SOR"
              value={classObj.luckBonus}
              colorClass="text-purple-300"
            />
            <StatBox
              label="FÉ"
              value={classObj.faithBonus}
              colorClass="text-yellow-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatBox({
  label,
  value,
}: {
  label: string;
  value: number;
  colorClass: string;
}) {
  const displayValue = value > 0 ? `+${value}` : value;

  return (
    <div className="bg-[#241f14] border border-[#B78652] p-2 rounded-lg flex flex-col justify-center shadow-inner">
      <span className="text-[#B78652] text-[12px] font-black mb-1">
        {label}
      </span>
      <span className={`font-serif text-lg text-amber-50`}>{displayValue}</span>
    </div>
  );
}
