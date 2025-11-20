function Footer() {
  return (
    <footer id="contact" className="w-full bg-orange-700/80 py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h4 className="text-lg font-semibold">BrightBlocks</h4>
            <p className="mt-1 text-white/80 text-sm">Playful learning for modern classrooms.</p>
          </div>
          <div className="flex gap-4 text-sm">
            <a className="text-white/90 hover:text-white" href="#">Privacy</a>
            <a className="text-white/90 hover:text-white" href="#">Terms</a>
            <a className="text-white/90 hover:text-white" href="#">Support</a>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/70">© {new Date().getFullYear()} BrightBlocks. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
