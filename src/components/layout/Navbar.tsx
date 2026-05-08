export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between p-4 border-b">
      <div className="font-bold text-lg">PIKUS</div>

      <nav className="flex gap-6 text-sm">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/mdli">MDLI™</a>
        <a href="/discover">Discover</a>
        <a href="/partners">Partners</a>
      </nav>
    </header>
  );
}