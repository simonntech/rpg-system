export type Race = {
    id: string;
    name: string;
    description: string;
};

export type CharacterClass = {
    id: string;
    name: string;
    title: string;
    description: string;
    strengthBonus: number;
    dexterityBonus: number;
    intelligenceBonus: number;
    agilityBonus: number;
    luckBonus: number;
    faithBonus: number;
}