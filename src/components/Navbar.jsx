function Navbar() {
  return (
    <header className="relative z-20 w-full bg-gradient-to-r from-orange-600/90 to-amber-500/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 font-bold">✚</div>
          <span className="text-lg font-semibold tracking-tight">BrightBlocks</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm text-white/90 hover:text-white">Features</a>
          <a href="#demo" className="text-sm text-white/90 hover:text-white">Demo</a>
          <a href="#contact" className="text-sm text-white/90 hover:text-white">Contact</a>
        </nav>
        <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm hover:shadow-md">
          Get started
        </button>
      </div>
    </header>
  );
}

export default Navbar;
