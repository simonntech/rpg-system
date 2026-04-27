export default function Button({ text, onclick }: { text: string; onclick: () => void }) {
  return (
    <div>
      <button className="bg-amber-600 text-white px-4 py-2 mb-8 font-black cursor-pointer rounded hover:bg-amber-400 hover:text-black transition-colors duration-300" onClick={onclick}>
        {text}
      </button>
    </div>
  );
}
