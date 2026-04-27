import Logo from "../assets/logo.png";
import Button from "../components/Button";
import { goToCreateCharacter } from "../functions/router";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="m-8 flex items-center justify-center">
        <img src={Logo} alt="Logo" className="w-3/5 h-auto md:w-full" />
      </div>
      <div className="bg-amber-100/60 p-6 text-center w-full">
        <h2 className="font-bold text-2xl">
          Faça sua ficha de personagem de RPG
        </h2>
        <p>
          Crie seu personagem e comece sua aventura, de forma totalmente
          gratuita!
        </p>
      </div>
      <Button text="Entrar" onclick={goToCreateCharacter} />
    </div>
  );
}
