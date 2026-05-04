import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CharacterCard } from "../components/CharacterCard";

// IMPORTANTE: Certifique-se de que você criou esse arquivo no passo anterior!
import { PrintableSheet } from "../components/PrintableSheet"; 

export default function CharacterDetails() {
  const { id } = useParams(); 
  const [character, setCharacter] = useState<any>(null);

  // 1. Busca o personagem no seu localStorage
  useEffect(() => {
    const saved = localStorage.getItem("rpgSavedCharacters");
    if (saved) {
      const list = JSON.parse(saved);
      const found = list.find((char: any) => char.id === id);
      setCharacter(found);
    }
  }, [id]);

  // 2. Dispara a criação do PDF
  const handlePrint = () => {
    window.print(); 
  };

  // 3. Tela de loading ou "Não encontrado"
  if (!character) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-amber-50">
        Personagem não encontrado ou carregando...
      </div>
    );
  }

  // 4. Renderização Dupla (Uma para a Web, outra para o Papel)
  return (
    <div className="min-h-screen bg-gray-900/80">
      
      {/* --- A) INTERFACE DA TELA (Escondida no PDF pela classe 'no-print') --- */}
      <div className="no-print p-8 flex flex-col items-center">
        <div className="w-full max-w-4xl mb-6 flex justify-between items-center">
          <Link to="/gallery" className="text-amber-100 hover:underline">
            ← Voltar
          </Link>
          
          {/* O BOTÃO DO PDF */}
          <button
            onClick={handlePrint}
            className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg transition-transform active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Gerar Ficha PDF
          </button>
        </div>
        
        <CharacterCard character={character} variant="full" />
      </div>

      <div className=" hidden print-only">
        <PrintableSheet character={character} />
      </div>
      
    </div>
  );
}