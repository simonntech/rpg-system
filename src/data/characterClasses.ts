import type { CharacterClass } from "./types/types";

export const CHARACTER_CLASSES: CharacterClass[] = [
    {
        id: "barbarian",
        name: "Bárbaro",
        title: "Furiosos e agressivos",
        description: "O Bárbaro é um guerreiro feroz e indomável, conhecido por sua força bruta e resistência. Ele é um combatente corpo a corpo que canaliza sua fúria para causar danos devastadores aos inimigos. O Bárbaro é resistente a danos e pode entrar em um estado de fúria, aumentando sua força e resistência temporariamente.",
        strengthBonus: 4,
        dexterityBonus: 1,
        intelligenceBonus: -1,
        agilityBonus: 1,
        luckBonus: 0,
        faithBonus: 0
    },
    {
        id: "bard",
        name: "Bardo",
        title: "Artista versátil e carismático",
        description: "O Bardo é um artista versátil e carismático, conhecido por sua habilidade em inspirar aliados e confundir inimigos. Ele é um mestre da música e da magia, capaz de lançar feitiços encantadores e usar sua voz para motivar seus companheiros. O Bardo é um personagem socialmente habilidoso, capaz de se adaptar a diferentes situações.",
        strengthBonus: 0,
        dexterityBonus: 2,
        intelligenceBonus: 2,
        agilityBonus: 1,
        luckBonus: 2,
        faithBonus: 0
    },
    {
        id: "sorcerer",
        name: "Feiticeiro",
        title: "Conjurador arcano",
        description: "O Feiticeiro é um conjurador arcano que obtém seus poderes por meio de um pacto com uma entidade sobrenatural. Ele é um mestre da magia negra e pode lançar feitiços poderosos para causar danos ou controlar os inimigos. O Feiticeiro é um personagem misterioso e enigmático, muitas vezes associado a forças sombrias.",
        strengthBonus: -1,
        dexterityBonus: 1,
        intelligenceBonus: 4,
        agilityBonus: 1,
        luckBonus: 0,
        faithBonus: 2
    },
    {
        id: "hunter",
        name: "Caçador",
        title: "Especialista em combate à distância",
        description: "O Caçador é um especialista em combate à distância, conhecido por sua precisão e habilidade em rastrear inimigos. Ele é mestre em usar armas de precisão e pode lançar feitiços de apoio para ajudar seus companheiros. O Caçador é um personagem independente e habilidoso, capaz de se adaptar a diferentes cenários de combate.",
        strengthBonus: 1,
        dexterityBonus: 4,
        intelligenceBonus: 2,
        agilityBonus: 3,
        luckBonus: 1,
        faithBonus: 0
    },
    {
        id: "cleric",
        name: "Clérigo",
        title: "Devoto de uma divindade",
        description: "O Clérigo é um devoto de uma divindade, conhecido por sua habilidade em curar ferimentos e proteger seus aliados. Ele é um mestre da magia divina e pode lançar feitiços de cura, proteção e suporte. O Clérigo é um personagem dedicado e compassivo, muitas vezes associado a forças do bem.",
        strengthBonus: 1,
        dexterityBonus: 0,
        intelligenceBonus: 2,
        agilityBonus: 1,
        luckBonus: 2,
        faithBonus: 4
    },
    {
        id: "druid",
        name: "Druida",
        title: "Guardião da natureza",
        description: "O Druida é um guardião da natureza, conhecido por sua habilidade em se transformar em animais e controlar os elementos. Ele é um mestre da magia natural e pode lançar feitiços de cura, controle e suporte. O Druida é um personagem conectado à natureza, muitas vezes associado a forças da vida e do equilíbrio.",
        strengthBonus: 1,
        dexterityBonus: 1,
        intelligenceBonus: 2,
        agilityBonus: 1,
        luckBonus: 1,
        faithBonus: 2
    },
    {
        id: "wizard",
        name: "Bruxo",
        title: "Mestre da magia arcana",
        description: "O Bruxo é um mestre da magia arcana, conhecido por sua habilidade em lançar feitiços poderosos e manipular forças místicas. Ele é um personagem erudito e poderoso, capaz de dominar os segredos da magia e usar seu conhecimento para influenciar o mundo ao redor.",
        strengthBonus: -1,
        dexterityBonus: 1,
        intelligenceBonus: 4,
        agilityBonus: 1,
        luckBonus: 0,
        faithBonus: 0
    },
    {
        id: "warrior",
        name: "Guerreiro",
        title: "Combatente versátil e resistente",
        description: "O Guerreiro é um combatente versátil e resistente, conhecido por sua habilidade em enfrentar inimigos em confrontos diretos. Ele é um mestre em usar armas e armaduras, capaz de se adaptar a diferentes situações de combate.",
        strengthBonus: 4,
        dexterityBonus: 1,
        intelligenceBonus: 1,
        agilityBonus: 2,
        luckBonus: 1,
        faithBonus: 0
    },
    {
        id: "rogue",
        name: "Ladino",
        title: "Furtivos",
        description: "Um Ladino é alguém furtivo, sorrateiro, trapaceiro, astuto e bom com armadilhas e mecanismos. Normalmente não possuem boa reputação nem boa intenção. Costumam levar a vida de assaltantes, assassinos, ladrões e vigaristas. São pragmáticos, e utilizam táticas julgadas como 'desleais', tanto em combate quanto fora dele.",
        strengthBonus: 1,
        dexterityBonus: 4,
        intelligenceBonus: 1,
        agilityBonus: 3,
        luckBonus: 2,
        faithBonus: 0
    },
    {
        id: "mage",
        name: "Mago",
        title: "Conjurador de feitiços",
        description: "O Mago é um conjurador de feitiços, conhecido por sua habilidade em lançar feitiços poderosos e manipular as forças místicas. Ele é um personagem erudito e poderoso, capaz de dominar os segredos da magia e usar seu conhecimento para influenciar o mundo ao redor.",
        strengthBonus: -1,
        dexterityBonus: 1,
        intelligenceBonus: 4,
        agilityBonus: 1,
        luckBonus: 0,
        faithBonus: 0
    },
    {
        id: "monk",
        name: "Monge",
        title: "Mestre das artes marciais",
        description: "O Monge é um mestre das artes marciais, conhecido por sua habilidade em combate corpo a corpo e sua disciplina espiritual. Ele é um personagem ágil e resistente, capaz de usar técnicas de combate e habilidades especiais para derrotar seus inimigos.",
        strengthBonus: 0,
        dexterityBonus: 3,
        intelligenceBonus: 1,
        agilityBonus: 4,
        luckBonus: 1,
        faithBonus: 2
    },
    {
        id: "paladin",
        name: "Paladino",
        title: "Defensor da justiça",
        description: "O Paladino é um defensor da justiça, conhecido por sua habilidade em proteger os inocentes e combater o mal. Ele é um personagem devoto e poderoso, capaz de usar sua fé para lançar feitiços de cura, proteção e suporte.",
        strengthBonus: 3,
        dexterityBonus: 1,
        intelligenceBonus: 1,
        agilityBonus: 0,
        luckBonus: 1,
        faithBonus: 4
    }
];