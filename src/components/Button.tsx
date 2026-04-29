export default function Button({ text, onclick }: { text: string; onclick: () => void }) {
  return (
    <div className="m-2">
      <button className="bg-black text-white px-4 py-7 mb-8 font-black cursor-pointer rounded-2xl hover:bg-amber-100 hover:text-black transition-colors duration-300" onClick={onclick}>
        {text}
      </button>
    </div>
  );
}
