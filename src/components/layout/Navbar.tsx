export default function Navbar() {
  return (
    <header className="w-full border-b bg-[#f0f0f0]">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="font-bold text-lg tracking-wide">
          PIKUS
        </div>

        <nav className="flex gap-8 text-sm text-[#757780]">
          <a className="hover:text-black" href="/">Home</a>
          <a className="hover:text-black" href="/products">Products</a>
          <a className="hover:text-black" href="/mdli">MDLI™</a>
          <a className="hover:text-black" href="/discover">Discover</a>
          <a className="hover:text-black" href="/partners">Partners</a>
        </nav>
      </div>
    </header>
  );
}