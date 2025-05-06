export default function FootNote() {
  return (
    <footer className="w-full bg-zinc-900 text-zinc-400 px-4 py-3 text-center text-sm sm:text-base flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
      © 2025{" "}
      <a
        className="text-zinc-400 hover:text-zinc-50 ml-2 mr-1"
        href="https://fahimmuntasr.github.io/Personal-Website/#"
        target="_blank"
      >
        {" "}
        Fahim Muntasir{" "}
      </a>{" "}
      - made using ReactJS
    </footer>
  );
}
