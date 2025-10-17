export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center">
        <p className="font-bold text-white text-lg">EffluentLogic</p>
        <p className="mt-2 text-sm">
          The independent diagnostic tool for South Africa's water industry.
        </p>
        <p className="mt-4 text-xs">
          &copy; {new Date().getFullYear()} EffluentLogic. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

