export default function SecondaryButton({ text }: { text: string }) {
  return (
    <div>
      <button className="bg-amber-200 text-amber-950 px-4 py-2 mb-8 font-black cursor-pointer rounded hover:bg-amber-700 hover:text-white transition-colors duration-300">
        {text}
      </button>
    </div>
  );
}
