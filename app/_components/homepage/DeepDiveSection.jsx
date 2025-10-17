const SchematicCard = ({ text }) => (
  <div className="bg-slate-100 rounded-md flex items-center justify-center text-center text-slate-600 text-sm font-medium p-4 min-h-[120px]">
    {text}
  </div>
);

export default function DeepDiveSection() {
  return (
    <section id="deep-dive" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900">
          A Tale of Two Technologies
        </h2>
        <p className="mt-2 text-lg text-slate-600">
          An unbiased technical overview of the leading separation solutions.
        </p>
      </div>
      <div className="max-w-7xl mx-auto mt-12 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* DAF Column */}
        <div className="p-6 rounded-lg bg-white border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800">
            Dissolved Air Flotation (DAF)
          </h3>
          <p className="mt-2 text-slate-600">
            Ideal for removing low-density suspended solids like oils, fats, and
            algae by floating them to the surface with micro-bubbles.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SchematicCard text="Animated Schematic: Coagulation & Flocculation" />
            <SchematicCard text="Animated Schematic: Air Saturation & Bubble Formation" />
            <SchematicCard text="Animated Schematic: Floc Flotation" />
            <SchematicCard text="Animated Schematic: Sludge Skimming" />
          </div>
        </div>
        {/* Clarifier Column */}
        <div className="p-6 rounded-lg bg-white border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800">
            Sedimentation Clarifier
          </h3>
          <p className="mt-2 text-slate-600">
            The optimal choice for separating high-density solids like sand,
            grit, and heavy precipitates by allowing them to settle at the
            bottom.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SchematicCard text="Animated Schematic: Coagulation & Flocculation" />
            <SchematicCard text="Animated Schematic: Gentle Mixing & Settling Zone" />
            <SchematicCard text="Animated Schematic: Sedimentation Process" />
            <SchematicCard text="Animated Schematic: Rake & Sludge Removal" />
          </div>
        </div>
      </div>
    </section>
  );
}

