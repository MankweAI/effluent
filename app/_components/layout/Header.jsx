import { Factory } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white/80 border-b border-slate-200 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Factory className="h-7 w-7 text-sky-500" />
            <a href="#" className="text-2xl font-extrabold text-slate-800">
              Effluent<span className="text-sky-500">Logic</span>
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              <a
                href="#deep-dive"
                className="text-slate-500 hover:text-sky-500 transition"
              >
                Technology Guides
              </a>
              <a
                href="#request-review"
                className="bg-sky-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-sky-600 transition-all duration-200"
              >
                Request a Review
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

