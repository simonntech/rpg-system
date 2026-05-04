import type { CharacterClass, Race } from "../types/types";

export default interface Character {
    id: string;
    name: string;
    gender: "male" | "female" ;
    class: CharacterClass;
    race: Race;
    imgPath: string;
}