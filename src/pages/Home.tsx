import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Button from "../components/Button";
import SecondaryButton from "../components/SecondaryButton";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

  function goToCreateCharacter() {
    navigate("/character-sheet");
  }

  function goToGallery() {
    navigate("/gallery");
  }

  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="flex flex-col items-center w-full">
        <img src={Logo} alt="Logo" className="w-1/2 md:w-1/5 h-auto mb-6" />
        <div className="bg-amber-50/80 p-9 text-center w-full">
          <h2 className="font-bold text-2xl">
            Crie e gerencie fichas de personagens de RPG de forma fácil e gratuita!
          </h2>
          <p>
            Fichas de personagens de RPG, com ilustrações temáticas. Sem
            cadastro, salvo diretamente no seu dispositivo, exportação em PDF,
            tudo totalmente grátis!
          </p>
          <p className="font-light text-sm">
            Sistema para estudo de aplicação Web, não se baseia em nenhum
            sistema específico de RPG.
          </p>
        </div>
      </div>
      <div className="flex items-center p-8 gap-8">
        <Button text="Minha Galeria" onclick={goToGallery} />
        <SecondaryButton text="Criar" onclick={goToCreateCharacter} />
      </div>
      <Footer />
    </div>
  );
}
