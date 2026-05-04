import { useState } from "react";
import { RACES } from "../data/races";
import { CHARACTER_CLASSES } from "../data/characterClasses";
import { Link } from "react-router-dom";

export function CharacterCard({
  character,
  variant = "full",
  onDelete,
  onEdit,
}: {
  character: any;
  variant?: "full" | "mini";
  onDelete?: () => void;
  onEdit?: () => void;
}) {
  const [showMobileDetails, setShowMobileDetails] = useState(false);

  const { name, race, class: characterClass, gender } = character;

  const raceObj = RACES.find((r) => r.id === race);
  const classObj = CHARACTER_CLASSES.find((c) => c.id === characterClass);

  function getCharacterImage() {
    const baseUrl = import.meta.env.BASE_URL;
    if (!race || !characterClass || !gender)
      return `${baseUrl}images/placeholder.png`;
    return `${baseUrl}images/${race}-${characterClass}-${gender}.jpg`;
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

  if (variant === "mini") {
    return (
      <div className="relative group">
        <Link to={`/character/${character.id}`} className="block">
          <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden shadow-xl border border-[#B78652] transition-transform group-hover:-translate-y-2 group-hover:shadow-2xl">
            <img
              src={getCharacterImage()}
              alt="Personagem"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/frame.png`}
              alt="Moldura"
              className="absolute inset-0 w-full h-full z-10 pointer-events-none object-fill"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black via-black/80 to-transparent"></div>

            <div className="absolute bottom-4 left-0 right-0 px-3 pb-1 text-center z-10">
              <h3 className="text-amber-100 font-serif font-black text-2xl tracking-tight leading-tight [text-shadow:2px_2px_0_rgb(67_20_7/80%)] mb-2">
                {getCharacterName()}
              </h3>
              <p className="text-black font-sans text-[10px] sm:text-xs font-semibold uppercase inline-block px-2 py-0.5 rounded-sm">
                {raceObj.name} {classObj.name}
              </p>
            </div>
          </div>
        </Link>
        <div className="absolute top-2 right-2 flex flex-col gap-2 z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
          {onEdit && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onEdit();
              }}
              className="bg-blue-900/90 hover:bg-blue-600 text-white p-2 rounded-xl border border-blue-950/50 shadow-lg transition-colors"
              title="Editar herói"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </button>
          )}

          {onDelete && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onDelete();
              }}
              className="bg-red-900/90 hover:bg-red-600 text-white p-2 rounded-xl border border-red-950/50 shadow-lg transition-colors"
              title="Excluir herói"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          )}
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
            src={`${import.meta.env.BASE_URL}images/frame.png`}
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
        className={`md:w-2/3 border-2 bg-[url(/images/bg-card.jpg)] border-[#B78652] p-6 md:p-8 flex-col gap-6 md:flex ${showMobileDetails ? "flex" : "hidden"}`}
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
