import { SheetForm } from "../components/SheetForm";

export default function CharacterSheet() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen gap-5">
      <div className="bg-black/70 w-full p-7">
        <a href="/" className="bg-amber-100 text-amber-950 hover:text-amber-100 hover:bg-amber-950 p-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4 inline-block mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Voltar
        </a>
        <h1 className="text-4xl font-bold  text-amber-50 font-serif text-center mt-4">
          Novo Personagem
        </h1>
      </div>

      <SheetForm />
    </div>
  );
}
