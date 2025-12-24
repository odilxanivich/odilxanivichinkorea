export default function Header() {
  return (
    <header
      className="
        w-full sticky top-0 z-50 border-b shadow-sm
        bg-[url('/images/banner.png')] bg-cover bg-center relative
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-4">

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          
          {/* Left: Logo / Title */}
          <h1 className="text-2xl font-bold tracking-tight text-white drop-shadow-xl">
            Odilxanivich In Korea
          </h1>

          {/* Right: Navigation */}
          <nav className="flex items-center gap-6 text-sm font-medium text-white">
            <a href="/" className="hover:text-red-300 transition-colors">Home</a>
            <a href="/iKorean" className="hover:text-red-300 transition-colors">iKorean</a>
            <a href="/posts" className="hover:text-red-300 transition-colors">Postlar</a>
            <a
              href="https://youtube.com/@odilxanivich"
              target="_blank"
              className="hover:text-red-300 transition-colors"
            >
              YouTube
            </a>
          </nav>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden items-center text-center">
          <h1 className="text-xl font-bold tracking-tight text-white drop-shadow-xl mb-2">
            Odilxanivich In Korea
          </h1>

          <nav className="flex gap-4 text-sm font-medium text-white">
            <a href="/" className="hover:text-red-300 transition-colors">Home</a>
            <a href="/iKorean" className="hover:text-red-300 transition-colors">iKorean</a>
            <a href="/posts" className="hover:text-red-300 transition-colors">Postlar</a>
            <a
              href="https://youtube.com/@odilxanivich"
              target="_blank"
              className="hover:text-red-300 transition-colors"
            >
              YouTube
            </a>
          </nav>
        </div>

      </div>
    </header>
  );
}
