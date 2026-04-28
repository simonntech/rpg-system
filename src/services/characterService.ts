export const characterService = {
  save: (characterData: any) => {
    const existing = localStorage.getItem("rpgSavedCharacters");
    const list = existing ? JSON.parse(existing) : [];
    list.push({ ...characterData, id: crypto.randomUUID() });
    localStorage.setItem("rpgSavedCharacters", JSON.stringify(list));
  },

  getAll: () => {
    const data = localStorage.getItem("rpgSavedCharacters");
    return data ? JSON.parse(data) : [];
  }
};