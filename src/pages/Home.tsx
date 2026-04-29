import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Button from "../components/Button";
import SecondaryButton from "../components/SecondaryButton";

export default function Home() {
  const navigate = useNavigate();

  function goToCreateCharacter() {
    navigate("/character-sheet");
  }

  function goToGallery() {
    navigate("/gallery");
  }

  return (
    <div className="flex flex-col items-center justify-around min-h-screen">
      <div className="flex flex-col items-center w-full">
        <img src={Logo} alt="Logo" className="w-1/9 md:w-1/5 h-auto" />
        <div className="bg-amber-50/80 p-9 text-center w-full">
          <h2 className="font-bold text-2xl">
            Faça sua ficha de personagem de RPG
          </h2>
          <p>
            Crie fichas de personagens de RPG, com ilustrações temáticas de
            perfil. Sem cadastro, totalmente grátis!
          </p>
        </div>
      </div>
      <div className="flex items-center p-8 gap-8">
        <Button text="Minha Galeria" onclick={goToGallery} />
        <SecondaryButton text="Criar" onclick={goToCreateCharacter} />
      </div>
    </div>
  );
}
