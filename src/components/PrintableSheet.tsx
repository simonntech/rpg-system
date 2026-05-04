import { RACES } from "../data/races";
import { CHARACTER_CLASSES } from "../data/characterClasses";

export function PrintableSheet({ character }: { character: any }) {
  const raceObj = RACES.find((r) => r.id === character.race);
  const classObj = CHARACTER_CLASSES.find((c) => c.id === character.class);

  function getCharacterImage() {
    const baseUrl = import.meta.env.BASE_URL;
    if (!character.race || !character.class || !character.gender)
      return `${baseUrl}images/placeholder.png`;
    return `${baseUrl}images/${character.race}-${character.class}-${character.gender}.jpg`;
  }

  return (
    <div className="bg-white text-black p-10 w-[210mm] min-h-[297mm] mx-auto shadow-none border border-gray-300 flex flex-col">
      <div className="border-b-2 border-amber-900 pb-4 mb-6 flex justify-between items-end">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full border-2 border-amber-900 overflow-hidden shrink-0 shadow-sm">
            <img
              src={getCharacterImage()}
              alt="Avatar do Personagem"
              className="w-full h-full object-cover grayscale-20"
            />
          </div>

          <div>
            <h1 className="text-3xl font-serif font-bold text-amber-900 uppercase">
              {character.name || "____________________"}
            </h1>
            <p className="text-gray-600 italic">Nome do Herói</p>
          </div>
        </div>

        <div className="text-right">
          <p className="font-bold">
            {raceObj?.name || "__________"} / {classObj?.name || "__________"}
          </p>
          <p className="text-gray-600">Raça e Classe</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-8 grow">
        <div className="col-span-1 space-y-4">
          <h2 className="font-bold border-b border-black uppercase text-sm">
            Atributos
          </h2>
          {[
            { label: "FOR", val: classObj?.strengthBonus },
            { label: "DES", val: classObj?.dexterityBonus },
            { label: "INT", val: classObj?.intelligenceBonus },
            { label: "AGI", val: classObj?.agilityBonus },
            { label: "SOR", val: classObj?.luckBonus },
            { label: "FÉ", val: classObj?.faithBonus },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-between border-2 border-black p-2 rounded"
            >
              <span className="font-black">{stat.label}</span>
              <span className="text-xl font-serif">
                {stat.val ? `+${stat.val}` : "___"}
              </span>
            </div>
          ))}
        </div>

        <div className="col-span-2 space-y-6">
          <div>
            <h3 className="font-bold text-amber-900 uppercase mb-2">
              História e Notas
            </h3>
            <div className="min-h-50 border-2 border-dashed border-gray-400 p-4 rounded-lg bg-gray-50">
              {character.description || ""}
              <div className="h-full w-full opacity-20 pointer-events-none">
                <div className="border-b border-gray-400 h-8"></div>
                <div className="border-b border-gray-400 h-8"></div>
                <div className="border-b border-gray-400 h-8"></div>
                <div className="border-b border-gray-400 h-8"></div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-amber-900 uppercase mb-2">
              Equipamentos
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="border-b border-gray-300 h-8 flex items-end text-gray-400 text-xs"
                >
                  Item {i}:
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t-2 border-amber-900 pt-6 grid grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold text-amber-900 uppercase mb-2 text-sm flex items-center gap-2">
            Traços Raciais: {raceObj?.name || "Desconhecida"}
          </h3>
          <p className="text-xs text-gray-800 leading-relaxed text-justify whitespace-pre-line">
            {raceObj?.description || "Nenhuma informação racial disponível."}
          </p>
        </div>

        <div>
          <h3 className="font-bold text-amber-900 uppercase mb-2 text-sm flex items-center gap-2">
            Habilidades: {classObj?.title || classObj?.name || "Desconhecida"}
          </h3>
          <p className="text-xs text-gray-800 leading-relaxed text-justify whitespace-pre-line">
            {classObj?.description ||
              "Nenhuma informação de classe disponível."}
          </p>
        </div>
      </div>
    </div>
  );
}
