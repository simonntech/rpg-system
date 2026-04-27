export default function Button({ text, onclick }: { text: string; onclick: () => void }) {
  return (
    <div>
      <button className="bg-[#36210a] text-white px-4 py-2 mb-8 font-black cursor-pointer rounded hover:bg-amber-200 hover:text-black transition-colors duration-300" onClick={onclick}>
        {text}
      </button>
    </div>
  );
}
