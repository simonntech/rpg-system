import { SheetForm } from "../components/SheetForm";

export default function CharacterSheet() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mt-8 text-amber-50">Ficha de Personagem</h1>
            <p className="text-lg mt-4 text-amber-100">Aqui você pode criar e gerenciar suas fichas de personagem para RPG.</p>
            <SheetForm />
        </div>
    )
}