export default function SecondaryButton({ text, onclick }: { text: string; onclick: () => void }) {
  return (
    <div className="m-2">
      <button className="bg-amber-100 text-black px-4 py-7 mb-8 font-black cursor-pointer rounded-2xl hover:bg-black hover:text-white transition-colors duration-300" onClick={onclick}>
        {text}
      </button>
    </div>
  );
}
